import { useState } from "react";
import { z } from "zod";
import { WHATSAPP_NUMBER } from "./data";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo.").max(100, "Nome muito longo."),
  atuacao: z.string().trim().min(2, "Conte qual é a sua área.").max(120, "Texto muito longo."),
  cidade: z.string().trim().min(2, "Informe sua cidade.").max(80, "Texto muito longo."),
  instagram: z.string().trim().max(60, "Texto muito longo.").optional(),
  email: z.string().trim().email("E-mail inválido.").max(255, "E-mail muito longo."),
  objetivo: z
    .string()
    .trim()
    .min(10, "Descreva em poucas linhas o seu objetivo.")
    .max(800, "Máximo de 800 caracteres."),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fields = [
  { name: "nome", label: "Nome completo", placeholder: "Como devo te chamar" },
  { name: "atuacao", label: "Área de atuação", placeholder: "Ex: esteticista, advogada, arquiteto" },
  { name: "cidade", label: "Cidade", placeholder: "Ex: Salvador, BA" },
  { name: "instagram", label: "Instagram (opcional)", placeholder: "@seuperfil" },
  { name: "email", label: "E-mail", placeholder: "voce@email.com" },
] as const;

export function AnamneseForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSent(true);

    const v = result.data;
    const message = [
      "Olá! Quero a Presença Digital Expressa.",
      `Nome: ${v.nome}`,
      `Atuação: ${v.atuacao}`,
      `Cidade: ${v.cidade}`,
      v.instagram ? `Instagram: ${v.instagram}` : null,
      `E-mail: ${v.email}`,
      `Objetivo: ${v.objetivo}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-soft p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.name === "email" ? "sm:col-span-2" : ""}>
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              maxLength={255}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
            />
            {errors[field.name] && (
              <p className="mt-1.5 text-sm text-destructive">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="objetivo" className="mb-1.5 block text-sm font-semibold text-foreground">
            O que você quer que a página resolva?
          </label>
          <textarea
            id="objetivo"
            name="objetivo"
            rows={4}
            maxLength={800}
            placeholder="Ex: quero que o cliente veja meus serviços e agende pelo WhatsApp sem precisar perguntar preço no direct."
            className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
          />
          {errors.objetivo && <p className="mt-1.5 text-sm text-destructive">{errors.objetivo}</p>}
        </div>
      </div>

      <button type="submit" className="btn-gold mt-6 w-full text-base">
        Enviar anamnese e falar no WhatsApp
      </button>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Ao enviar, abrimos uma conversa no WhatsApp com suas respostas já organizadas. Nenhum
        pagamento é solicitado antes da proposta e do contrato assinado.
      </p>

      {sent && (
        <p className="mt-3 rounded-xl bg-gold-soft px-4 py-3 text-sm font-semibold text-foreground">
          Respostas prontas! Se o WhatsApp não abrir, verifique o bloqueador de pop-ups.
        </p>
      )}
    </form>
  );
}
