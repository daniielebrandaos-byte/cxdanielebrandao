import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { createSkillRecommendation } from "./skill-recommender.server";

const recommendationInput = z.object({
  need: z.string().trim().min(20, "Descreva sua necessidade com um pouco mais de detalhe.").max(1500, "Resuma sua necessidade em até 1.500 caracteres."),
});

export const recommendSkills = createServerFn({ method: "POST" })
  .inputValidator((data) => recommendationInput.parse(data))
  .handler(async ({ data }) => ({ recommendation: await createSkillRecommendation(data.need) }));