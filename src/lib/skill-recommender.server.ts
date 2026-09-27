import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

import { createLovableAiGatewayRunIdFetch } from "./ai-run-id.server";

const MODEL = "openai/gpt-6-astra";
const AVAILABLE_SKILLS = [
  "Salesforce",
  "Syonet",
  "OTO",
  "Avec",
  "HubSpot",
  "Trello",
  "Canva básico",
  "Google Calendar",
  "Outlook",
];

function safeGatewayMessage(error: unknown) {
  if (error && typeof error === "object") {
    const statusCode = "statusCode" in error && typeof error.statusCode === "number" ? error.statusCode : undefined;
    const message = "message" in error && typeof error.message === "string" ? error.message : undefined;

    if (statusCode === 402 || statusCode === 403 || statusCode === 429 || (statusCode && statusCode >= 500)) {
      return message || "A recomendação está temporariamente indisponível. Tente novamente mais tarde.";
    }
  }

  return "Não foi possível gerar a recomendação agora. Tente novamente mais tarde.";
}

export async function createSkillRecommendation(need: string) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    throw new Error("O orientador de habilidades ainda não está configurado.");
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: {
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk",
    },
    fetch: runIdFetch.fetch,
  });

  try {
    const result = streamText({
      model: provider.responses(MODEL),
      system: [
        "Você orienta potenciais clientes de Daniele Brandão, especialista em CX e jornada do cliente.",
        `Recomende somente habilidades desta lista: ${AVAILABLE_SKILLS.join(", ")}.`,
        "Responda em português do Brasil, com tom humano, profissional e transparente.",
        "Escolha de duas a quatro habilidades realmente relevantes.",
        "Comece com uma frase curta de entendimento e depois apresente cada habilidade em uma linha iniciada por •, explicando sua utilidade.",
        "Não prometa resultados, não invente serviços e não diga que as plataformas são vendidas como serviço.",
      ].join(" "),
      prompt: `Apoio descrito pelo potencial cliente:\n${need}`,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });

    const recommendation = (await result.text).trim();
    if (!recommendation) {
      throw new Error("A recomendação não retornou conteúdo.");
    }

    return recommendation.replaceAll("**", "");
  } catch (error) {
    throw new Error(safeGatewayMessage(error));
  }
}