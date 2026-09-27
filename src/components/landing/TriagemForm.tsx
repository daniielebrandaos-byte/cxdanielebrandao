import { useState } from "react";
import { Linkedin, Lock, MessageCircle } from "lucide-react";
import { LINKEDIN, WHATSAPP_NUMBER } from "./data";

const dores = [
  "Demora no atendimento",
  "Vendas perdidas no WhatsApp",
  "Falta de acompanhamento pós-venda",
  "Clientes antigos esquecidos",
];
const prazos = ["Imediato", "Nos próximos 7 dias", "Apenas cotando"];

export function TriagemForm() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [dor, setDor] = useState("");
  const [volume, setVolume] = useState("");
  const [prazo, setPrazo] = useState("");
  const [erro, setErro] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (nome.trim().length < 2 || whats.replace(/\D/g, "").length < 10 || !dor || !volume.trim() || !prazo) {
      setErro("Preencha todos os campos, com um WhatsApp válido (DDD + número).");
      return;
    }
    setErro("");
    const msg = `📋 Anamnese e Triagem Comercial\n\nNome/Empresa: ${nome}\nWhatsApp: ${whats}\nPrincipal dor: ${dor}\nVolume diário de contatos: ${volume}\nPrevisão de início: ${prazo}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }

  const input =
    "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-ink outline-none focus:border-orange focus:ring-2 focus:ring-orange/30";

  return (
    <form onSubmit={enviar} className="card-soft p-6 text-ink sm:p-8" noValidate>
      <label className="block font-semibold">
        Nome completo / Nome da empresa
        <input className={input} value={nome} onChange={(e) => setNome(e.target.value)} maxLength={120} />
      </label>
      <label className="mt-5 block font-semibold">
        WhatsApp para contato
        <input className={input} inputMode="tel" placeholder="(11) 90000-0000" value={whats} onChange={(e) => setWhats(e.target.value)} maxLength={20} />
      </label>
      <fieldset className="mt-5">
        <legend className="font-semibold">Qual a sua principal dor hoje?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {dores.map((d) => (
            <label key={d} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 ${dor === d ? "border-orange bg-orange/10" : "border-border"}`}>
              <input type="radio" name="dor" className="accent-orange" checked={dor === d} onChange={() => setDor(d)} />
              {d}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 block font-semibold">
        Volume médio de contatos diários no WhatsApp
        <input className={input} placeholder="Ex.: 30 contatos" value={volume} onChange={(e) => setVolume(e.target.value)} maxLength={60} />
      </label>
      <fieldset className="mt-5">
        <legend className="font-semibold">Previsão de início dos serviços</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {prazos.map((p) => (
            <label key={p} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 ${prazo === p ? "border-orange bg-orange/10" : "border-border"}`}>
              <input type="radio" name="prazo" className="accent-orange" checked={prazo === p} onChange={() => setPrazo(p)} />
              {p}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 rounded-xl border border-orange/40 bg-orange/5 p-4 text-sm">
        <p className="flex items-start gap-2">
          <Lock className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
          <span>
            <strong>CERTIFICADO DE REGISTRO E CONFIDENCIALIDADE:</strong> As informações fornecidas neste diagnóstico são protegidas por sigilo profissional. Este formulário gera um registro único de triagem comercial. Ao enviar, você declara intenção real de avaliação de proposta e aceita receber o nosso contrato digital transparente via ZapSign caso haja alinhamento comercial.
          </span>
        </p>
      </div>

      {erro && <p role="alert" className="mt-4 text-sm font-semibold text-destructive">{erro}</p>}

      <button type="submit" className="btn-orange mt-6 w-full text-base">Enviar triagem</button>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-navy text-sm">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </form>
  );
}
