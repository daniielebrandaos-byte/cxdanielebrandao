import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { LoaderCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { recommendSkills } from "@/lib/skill-recommender.functions";

export function SkillRecommender() {
  const recommend = useServerFn(recommendSkills);
  const [need, setNeed] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setRecommendation("");

    if (need.trim().length < 20) {
      setError("Descreva sua necessidade com um pouco mais de detalhe.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await recommend({ data: { need } });
      setRecommendation(result.recommendation);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Não foi possível gerar a recomendação agora.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="card-soft mt-10 p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="icon-tile shrink-0"><Sparkles className="h-6 w-6" /></span>
        <div>
          <h3 className="text-xl">Quais habilidades podem apoiar você?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Descreva sua necessidade e receba uma recomendação personalizada.</p>
        </div>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <label htmlFor="support-need" className="text-sm font-bold text-ink">De que apoio você precisa?</label>
        <Textarea
          id="support-need"
          value={need}
          onChange={(event) => setNeed(event.target.value)}
          placeholder="Ex.: preciso organizar os contatos, acompanhar oportunidades e melhorar o retorno aos clientes."
          className="mt-2 min-h-32 resize-y bg-card"
          maxLength={1500}
          aria-describedby="support-help support-error"
          disabled={isLoading}
        />
        <div className="mt-2 flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span id="support-help">Não inclua dados pessoais ou informações confidenciais.</span>
          <span>{need.length}/1500</span>
        </div>
        <Button type="submit" className="mt-5 h-auto rounded-xl bg-orange px-5 py-3 font-bold text-orange-foreground hover:bg-orange/90" disabled={isLoading}>
          {isLoading ? <LoaderCircle className="animate-spin" /> : <Sparkles />}
          {isLoading ? "Analisando..." : "Recomendar habilidades"}
        </Button>
      </form>

      {error && <p id="support-error" role="alert" className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">{error}</p>}
      {recommendation && (
        <div className="mt-6 border-l-4 border-orange bg-surface p-5" aria-live="polite">
          <p className="text-xs font-bold uppercase text-orange">Recomendação para você</p>
          <p className="mt-3 whitespace-pre-line text-sm text-ink sm:text-base">{recommendation}</p>
        </div>
      )}
    </div>
  );
}