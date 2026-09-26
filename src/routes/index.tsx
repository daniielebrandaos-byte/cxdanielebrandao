import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  FileSignature,
  Instagram,
  Layers,
  MapPin,
  MessageCircle,
  PenLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";

import folioShot from "@/assets/portfolio/folio.jpg";
import heroMockup from "@/assets/hero-mockup.jpg";
import raileneShot from "@/assets/portfolio/railene.jpg";
import { AnamneseForm } from "@/components/landing/AnamneseForm";
import {
  BRAND,
  WHATSAPP_NUMBER,
  faqs,
  metrics,
  pains,
  portfolio,
  services,
  steps,
  testimonials,
} from "@/components/landing/data";

const portfolioShots: Record<string, string> = {
  "railene-ferreira": raileneShot,
  "daniele-brandao-folio": folioShot,
};

const TITLE = "Presença Digital Expressa — página profissional no ar em 48h";
const DESCRIPTION =
  "Transformo o link da bio do seu Instagram em uma vitrine profissional completa, com WhatsApp, catálogo e localização, pronta em até 48 horas.";

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

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Quero saber mais sobre a Presença Digital Expressa.",
)}`;

const serviceIcons = [Layers, MessageCircle, Instagram, MapPin, PenLine, Smartphone];
const stepIcons = [FileSignature, ShieldCheck, Sparkles, CalendarClock];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <span className="truncate text-base font-extrabold tracking-tight">{BRAND}</span>
          <a href="#anamnese" className="btn-gold shrink-0 px-4 py-2 text-sm">
            Quero minha página
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="badge-gold">Presença Digital Expressa</span>
            <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Seu link da bio vira uma vitrine profissional em{" "}
              <span className="text-gold">48 horas</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Uma página elegante, feita para celular, com WhatsApp, catálogo, redes e localização
              em um só endereço — para você parar de perder cliente por falta de organização.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#anamnese" className="btn-gold text-base">
                Começar pela anamnese <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#como-funciona" className="btn-outline text-base">
                Ver como funciona
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
              Proposta e contrato antes de qualquer pagamento.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gold-soft/70 blur-2xl" />
            <img
              src={heroMockup}
              width={1200}
              height={1408}
              alt="Página profissional exibida na tela de um celular"
              className="w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <span className="badge-gold">Se você se reconhece aqui</span>
        <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
          O serviço é excelente. O problema é a primeira impressão digital.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pains.map((pain) => (
            <div key={pain.title} className="card-soft p-6">
              <h3 className="text-lg">{pain.title}</h3>
              <p className="mt-2 text-muted-foreground">{pain.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <span className="badge-gold">O que está incluído</span>
        <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
          Tudo o que seu cliente precisa, em um único link.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Sparkles;
            return (
              <div key={service.title} className="card-soft p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <h3 className="mt-4 text-lg">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Métricas — dobra escura */}
      <section className="bg-navy py-14 text-navy-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="badge-onnavy">Entrega expressa</span>
          <h2 className="mt-5 max-w-2xl text-3xl text-navy-foreground sm:text-4xl">
            Rápido não é improviso. É processo definido.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-navy-foreground/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <span className="badge-gold">Passo a passo</span>
        <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
          Do formulário à página no ar, sem complicação técnica.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = stepIcons[index] ?? Sparkles;
            return (
              <div key={item.step} className="card-soft p-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-gold" />
                  <span className="text-sm font-extrabold text-muted-foreground">{item.step}</span>
                </div>
                <h3 className="mt-4 text-lg">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="card-soft grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="badge-gold">Quem cuida do seu projeto</span>
            <h2 className="mt-5 text-3xl sm:text-4xl">{BRAND}</h2>
            <p className="mt-4 text-muted-foreground">
              Trabalho com experiência do cliente e presença digital para profissionais que já
              entregam um serviço excelente e precisam que a vitrine online diga o mesmo. Minha
              função é organizar sua mensagem, seus contatos e seu caminho de agendamento em uma
              página clara, elegante e fácil de usar no celular.
            </p>
            <p className="mt-4 text-muted-foreground">
              Você não precisa entender de tecnologia: responde a anamnese, aprova a proposta e
              recebe o link pronto.
            </p>
          </div>
          <ul className="grid content-start gap-3">
            {[
              "Contrato e proposta formal em toda entrega",
              "Escrita voltada para agendamento e venda",
              "Acompanhamento durante a revisão",
              "Suporte para publicar na bio do Instagram",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <span className="badge-gold">Prova social</span>
        <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
          O que muda quando o link fica profissional.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.quote} className="card-soft p-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{item.name}</span> · {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <span className="badge-gold">Dúvidas frequentes</span>
        <h2 className="mt-5 text-3xl sm:text-4xl">Transparência antes de começar.</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="card-soft group p-5">
              <summary className="cursor-pointer list-none text-base font-bold marker:hidden">
                {faq.q}
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Anamnese / CTA final */}
      <section id="anamnese" className="bg-navy py-14 text-navy-foreground sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="badge-onnavy">Comece agora</span>
            <h2 className="mt-5 text-3xl text-navy-foreground sm:text-4xl">
              Responda a anamnese e receba sua proposta.
            </h2>
            <p className="mt-4 text-navy-foreground/75">
              São poucas perguntas. Com elas eu entendo seu serviço, seu público e o objetivo da
              página — e te envio escopo, prazo e valor por escrito antes de qualquer pagamento.
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
              <MessageCircle className="h-4 w-4" /> Prefiro falar direto no WhatsApp
            </a>
          </div>
          <AnamneseForm />
        </div>
      </section>

      {/* Rodapé com upsell sutil */}
      <footer className="border-t border-border px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-muted-foreground">
            Também disponível: pacotes de <span className="font-semibold text-foreground">Gestão
            de Atendimento</span> e{" "}
            <span className="font-semibold text-foreground">Assistência Virtual</span> para quem
            quer manter a rotina organizada depois da página no ar.
          </p>
          <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <span className="truncate text-sm font-bold">{BRAND}</span>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-navy px-4 py-2 text-sm">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
