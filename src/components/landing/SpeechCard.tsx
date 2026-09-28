import { useEffect, useState } from "react";
import { Headphones, Square } from "lucide-react";
import { SPEECH_TEXT } from "./data";

export function SpeechCard() {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported("speechSynthesis" in window);
    return () => window.speechSynthesis?.cancel();
  }, []);

  function toggle() {
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(SPEECH_TEXT);
    u.lang = "pt-BR";
    u.rate = 1.08;
    u.pitch = 1;
    const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith("pt"));
    if (voice) u.voice = voice;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    synth.cancel();
    synth.speak(u);
    setSpeaking(true);
  }

  return (
    <div className="mt-8 rounded-2xl border border-orange/30 bg-orange/5 p-5 text-ink shadow-[var(--shadow-soft)]">
      <button
        type="button"
        onClick={toggle}
        disabled={!supported}
        aria-label="Ouvir apresentação acessível dos serviços em voz alta"
        aria-pressed={speaking}
        className="btn-orange w-full text-base disabled:opacity-60"
      >
        {speaking ? <Square className="h-5 w-5" /> : <Headphones className="h-5 w-5" />}
        {speaking ? "Parar leitura" : "Ouvir apresentação dos serviços em voz alta"}
      </button>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        {supported ? "Recurso de acessibilidade com a voz do seu próprio aparelho." : "Seu navegador não oferece leitura em voz alta."}
      </p>
    </div>
  );
}
