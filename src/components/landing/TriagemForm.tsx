import { useState } from "react";
import { Linkedin, Lock, Mail, MessageCircle } from "lucide-react";
import { EMAIL, LINKEDIN, WHATSAPP_NUMBER, tools } from "./data";

const dores = [
  "Mais empatia e escuta ativa",
  "Respostas ágeis e personalizadas",
  "Acompanhamento em toda a jornada",
  "Relacionamento próximo no pós-venda",
];
const prazos = ["Imediato", "Nos próximos 7 dias", "Apenas cotando"];
const ferramentas = tools.flatMap((tool) => tool.items);

export function TriagemForm() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [site, setSite] = useState("");
  const [dor, setDor] = useState("");
  const [volume, setVolume] = useState("");
  const [prazo, setPrazo] = useState("");
  const [ferramentasSelecionadas, setFerramentasSelecionadas] = useState<string[]>([]);
  const [erro, setErro] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (nome.trim().length < 2 || whats.replace(/\D/g, "").length < 10 || !email.includes("@") || !dor || !volume.trim() || !prazo) {
      setErro("Preencha os campos obrigatórios com WhatsApp e e-mail válidos.");
      return;
    }
    setErro("");
    const msg = montarMensagem();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }

  function montarMensagem() {
    return `📋 Anamnese e Triagem de CX\n\nNome/Empresa: ${nome}\nWhatsApp: ${whats}\nE-mail: ${email}\nInstagram: ${instagram || "Não informado"}\nLinkedIn: ${linkedin || "Não informado"}\nSite: ${site || "Não informado"}\nO que espera de um atendimento humanizado: ${dor}\nFerramentas utilizadas: ${ferramentasSelecionadas.length > 0 ? ferramentasSelecionadas.join(", ") : "Não informado"}\nVolume diário de contatos: ${volume}\nPrevisão de início: ${prazo}`;
  }

  function enviarEmail() {
    if (nome.trim().length < 2 || whats.replace(/\D/g, "").length < 10 || !email.includes("@") || !dor || !volume.trim() || !prazo) {
      setErro("Preencha os campos obrigatórios com WhatsApp e e-mail válidos.");
      return;
    }
    setErro("");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Anamnese e Triagem de CX")}&body=${encodeURIComponent(montarMensagem())}`;
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
      <label className="mt-5 block font-semibold">
        E-mail
        <input className={input} type="email" placeholder="voce@empresa.com.br" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={120} />
      </label>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block font-semibold">
          Instagram <span className="font-normal text-muted-foreground">(se tiver)</span>
          <input className={input} placeholder="@seuperfil" value={instagram} onChange={(e) => setInstagram(e.target.value)} maxLength={120} />
        </label>
        <label className="block font-semibold">
          LinkedIn <span className="font-normal text-muted-foreground">(se tiver)</span>
          <input className={input} placeholder="linkedin.com/in/seuperfil" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} maxLength={180} />
        </label>
      </div>
      <label className="mt-5 block font-semibold">
        Site <span className="font-normal text-muted-foreground">(se tiver)</span>
        <input className={input} inputMode="url" placeholder="www.suaempresa.com.br" value={site} onChange={(e) => setSite(e.target.value)} maxLength={180} />
      </label>
      <fieldset className="mt-5">
        <legend className="font-semibold">O que você espera de um atendimento humanizado?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {dores.map((d) => (
            <label key={d} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 ${dor === d ? "border-orange bg-orange/10" : "border-border"}`}>
              <input type="radio" name="dor" className="accent-orange" checked={dor === d} onChange={() => setDor(d)} />
              {d}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-5">
        <legend className="font-semibold">Quais destas ferramentas você utiliza atualmente?</legend>
        <p className="mt-1 text-sm text-muted-foreground">Selecione todas que se aplicam.</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {ferramentas.map((ferramenta) => {
            const selecionada = ferramentasSelecionadas.includes(ferramenta);
            return (
              <label key={ferramenta} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 ${selecionada ? "border-orange bg-orange/10" : "border-border"}`}>
                <input
                  type="checkbox"
                  className="accent-orange"
                  checked={selecionada}
                  onChange={() => setFerramentasSelecionadas((atuais) => selecionada ? atuais.filter((item) => item !== ferramenta) : [...atuais, ferramenta])}
                />
                {ferramenta}
              </label>
            );
          })}
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

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="submit" className="btn-orange w-full text-base"><MessageCircle className="h-5 w-5" /> Enviar pelo WhatsApp</button>
        <button type="button" onClick={enviarEmail} className="btn-outline w-full text-base"><Mail className="h-5 w-5" /> Enviar por e-mail</button>
      </div>
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
