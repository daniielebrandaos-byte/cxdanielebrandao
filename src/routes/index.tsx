import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Ear, HeartHandshake, Linkedin, MessageCircle, ShieldCheck, TrendingUp, Zap } from "lucide-react";

import { SpeechCard } from "@/components/landing/SpeechCard";
import { TriagemForm } from "@/components/landing/TriagemForm";
import { BRAND, LINKEDIN, WA_HERO, WHATSAPP_NUMBER, extras, results, skills, strategies, tools } from "@/components/landing/data";

const TITLE = "Daniele Brandão — Assistente Virtual Comercial (SDR, Closer e Recuperação)";
const DESCRIPTION =
  "Assistência Virtual Comercial especializada em triagem de leads, fechamento de vendas, upsell, cross-sell e recuperação de clientes no WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skillIcons = [Ear, Zap, ShieldCheck];

function Index() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <header className="sticky top-0 z-40 bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <span className="truncate text-base font-extrabold tracking-tight">{BRAND}</span>
          <a href="#triagem" className="btn-orange shrink-0 px-4 py-2 text-sm">Fazer triagem</a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-navy pb-16 pt-10 text-navy-foreground sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <span className="badge-orange !text-orange">Assistente Virtual • Atendimento & Comercial</span>
          <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Não perca mais nenhuma venda por falta de tempo.{" "}
            <span className="text-orange">Eu cuido do atendimento e do comercial do seu negócio.</span>
          </h1>
          <p className="mt-6 text-lg text-navy-foreground/85 sm:text-xl">
            Assistência Virtual Comercial especializada em triagem de leads (SDR), fechamento de vendas (Closer) e recuperação de clientes no WhatsApp.
          </p>
          <p className="mt-3 text-base text-navy-foreground/70 sm:text-lg">
            Assistente Virtual especialista em Cross-sell e Upsell. Eu transformo os seus clientes atuais em compradores recorrentes usando abordagens personalizadas no WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="btn-orange text-base">
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp Profissional
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-outline text-base">
              <Linkedin className="h-5 w-5" /> Ver Perfil no LinkedIn
            </a>
          </div>
          <SpeechCard />
        </div>
      </section>

      {/* Habilidades */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="badge-orange">Especialista, não generalista</span>
        <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">Atendimento humano, claro e ágil — do primeiro contato ao fechamento.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = skillIcons[i] ?? HeartHandshake;
            return (
              <div key={s.title} className="card-soft p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10">
                  <Icon className="h-6 w-6 text-orange" />
                </span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {results.map((r) => (
            <span key={r} className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-navy-foreground">
              <TrendingUp className="h-4 w-4 text-orange" /> {r}
            </span>
          ))}
        </div>
      </section>

      {/* Estratégias */}
      <section className="bg-navy py-16 text-navy-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="badge-orange !text-orange">O coração do serviço</span>
          <h2 className="mt-5 max-w-2xl text-3xl text-navy-foreground sm:text-4xl">Estratégias comerciais que geram receita com quem já é seu cliente.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {strategies.map((s) => (
              <div key={s.title} className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 transition-colors hover:border-orange">
                <span className="text-3xl" aria-hidden>{s.emoji}</span>
                <h3 className="mt-4 text-xl text-navy-foreground">{s.title}</h3>
                <p className="mt-3 text-navy-foreground/75">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="badge-orange">Ferramentas de operação</span>
        <h2 className="mt-5 text-3xl sm:text-4xl">O ecossistema que eu uso no dia a dia.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {tools.map((t) => (
            <div key={t.group} className="card-soft p-6">
              <h3 className="text-lg">{t.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.items.map((it) => (
                  <li key={it} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Triagem */}
      <section id="triagem" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="text-3xl sm:text-4xl">📋 Anamnese e Triagem Comercial do Seu Negócio</h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Preencha os dados abaixo para identificarmos a real necessidade da sua empresa e avaliarmos a intenção de contratação.
        </p>
        <div className="mt-8"><TriagemForm /></div>
      </section>

      {/* Extras */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-xl text-muted-foreground">Serviços adicionais</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {extras.map((e) => (
              <li key={e.title} className="flex gap-3">
                <span aria-hidden className="text-xl">{e.emoji}</span>
                <p><strong>{e.title}:</strong> <span className="text-muted-foreground">{e.text}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-navy px-4 py-12 text-navy-foreground sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-2xl font-bold tracking-tight sm:text-3xl">
            Não perca mais nenhuma venda. <span className="text-orange">Eu cuido do atendimento e do comercial do seu negócio.</span>
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="btn-orange"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-outline"><Linkedin className="h-5 w-5" /> LinkedIn</a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-navy-foreground/60">
            <BadgeCheck className="h-4 w-4 text-orange" /> {BRAND} · Contrato digital via ZapSign
          </p>
        </div>
      </footer>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange text-orange-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
