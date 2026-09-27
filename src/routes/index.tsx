import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  BadgeCheck,
  CalendarCheck,
  Ear,
  HeartHandshake,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

import { SpeechCard } from "@/components/landing/SpeechCard";
import { TriagemForm } from "@/components/landing/TriagemForm";
import {
  BRAND,
  EMAIL,
  LINKEDIN,
  WA_HERO,
  WHATSAPP_NUMBER,
  coreServices,
  extras,
  results,
  skills,
  strategies,
  tools,
} from "@/components/landing/data";

const TITLE = "Daniele Brandão — Especialista em CX e Jornada do Cliente";
const DESCRIPTION =
  "Atendimento humanizado, gestão da jornada do cliente, triagem de leads, apoio comercial e relacionamento no WhatsApp.";

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
const serviceIcons = [HeartHandshake, CalendarCheck, TrendingUp];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-ink">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <span className="truncate text-base font-extrabold text-ink">{BRAND}</span>
          <a href="#contato" className="btn-orange shrink-0 px-4 py-2 text-sm">
            Atendimento e contato
          </a>
        </div>
      </header>

      <section id="jornada" className="relative bg-surface py-16 sm:py-24">
        <div className="journey-line" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="badge-orange">Especialista em CX e jornada do cliente</span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">Atendimento humano, claro e ágil — do primeiro contato ao pós-venda.</h1>
            <p className="text-lg text-muted-foreground">
              Uma operação organizada para entender necessidades, reduzir ruídos e construir relacionamentos que continuam depois da compra.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skillIcons[index] ?? HeartHandshake;
              return (
                <article key={skill.title} className="card-soft group p-6">
                  <span className="icon-tile"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-xl">{skill.title}</h3>
                  <p className="mt-2 text-muted-foreground">{skill.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {results.map((result) => (
              <div key={result} className="metric-strip">
                <TrendingUp className="h-5 w-5 shrink-0 text-orange" />
                <span>{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="badge-orange">Serviços que já realizo</span>
              <h2 className="mt-5 text-3xl sm:text-4xl">Cuidado em cada ponto de contato.</h2>
              <p className="mt-4 text-muted-foreground">Do primeiro “olá” à organização da agenda e ao acompanhamento após a venda.</p>
            </div>
            <div className="space-y-4">
              {coreServices.map((service, index) => {
                const Icon = serviceIcons[index] ?? Sparkles;
                return (
                  <article key={service.title} className="service-row group">
                    <span className="service-number">0{index + 1}</span>
                    <span className="icon-tile"><Icon className="h-6 w-6" /></span>
                    <div>
                      <h3 className="text-xl">{service.title}</h3>
                      <p className="mt-2 text-muted-foreground">{service.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="badge-orange">Estratégia comercial com visão de jornada</span>
          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl">Relacionamento que gera novas oportunidades com respeito ao momento do cliente.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {strategies.map((strategy, index) => (
              <article key={strategy.title} className={`card-soft p-6 ${index === 1 ? "md:translate-y-6" : ""}`}>
                <span className="text-3xl" aria-hidden>{strategy.emoji}</span>
                <h3 className="mt-4 text-xl">{strategy.title}</h3>
                <p className="mt-3 text-muted-foreground">{strategy.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="badge-orange">Conhecimentos e habilidades</span>
              <h2 className="mt-5 text-3xl sm:text-4xl">Ferramentas que conheço e utilizo na operação.</h2>
              <p className="mt-4 text-muted-foreground">Elas apoiam meu trabalho e a rotina do seu negócio; não são plataformas que ofereço como serviço.</p>
            </div>
            <div className="grid gap-5">
              {tools.map((tool) => (
                <article key={tool.group} className="card-soft p-6">
                  <h3 className="text-lg">{tool.group}</h3>
                  {tool.description && <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tool.items.map((item) => <li key={item} className="skill-chip">{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="badge-orange">Serviços adicionais</span>
          <h2 className="mt-5 text-3xl sm:text-4xl">Apoio complementar para sua presença digital.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {extras.map((extra) => (
              <article key={extra.title} className="card-soft flex gap-4 p-6">
                <span aria-hidden className="text-2xl">{extra.emoji}</span>
                <div><h3 className="text-lg">{extra.title}</h3><p className="mt-2 text-muted-foreground">{extra.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="badge-orange">Assistente Virtual • CX & Jornada do Cliente</span>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.1] sm:text-5xl">
            Não perca mais nenhum cliente. <span className="text-orange">Foque na jornada do cliente.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Eu cuido do atendimento, do relacionamento e do comercial para que cada contato se sinta ouvido, bem orientado e acompanhado.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="btn-orange text-base">
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <a href="#triagem" className="btn-outline text-base">
              Enviar mensagem <ArrowDown className="h-5 w-5" />
            </a>
          </div>
          <SpeechCard />
          <div className="mt-16 border-t border-border pt-16">
          <span className="badge-orange">Atendimento e contato</span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl sm:text-4xl">Vamos conversar sobre a experiência que você quer oferecer aos seus clientes?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="contact-card">
              <MessageCircle className="h-6 w-6 text-orange" /><strong>WhatsApp</strong><span>Iniciar conversa</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="contact-card">
              <Mail className="h-6 w-6 text-orange" /><strong>E-mail</strong><span>{EMAIL}</span>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-card">
              <Linkedin className="h-6 w-6 text-orange" /><strong>LinkedIn</strong><span>Ver perfil profissional</span>
            </a>
          </div>
          </div>
        </div>
      </section>

      <section id="triagem" className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="badge-orange">Última etapa • Triagem de CX</span>
            <h2 className="mt-5 text-3xl sm:text-4xl">Conte um pouco sobre o seu negócio.</h2>
            <p className="mt-3 text-lg text-muted-foreground">Suas respostas ajudam a entender sua jornada atual antes da nossa conversa.</p>
          </div>
          <div className="mt-8"><TriagemForm /></div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-bold text-ink">{BRAND}</p>
            <p className="mt-1 text-sm text-muted-foreground">Especialista em CX e jornada do cliente</p>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><BadgeCheck className="h-4 w-4 text-orange" /> Contrato digital via ZapSign</p>
        </div>
      </footer>

      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange text-orange-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105">
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
