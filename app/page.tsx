import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "./components/whatsapp-button";
import { QueixaCard } from "./components/queixa-card";
import { FaqItem } from "./components/faq-item";
import {
  AnxietyIcon,
  DepressionIcon,
  TraumaIcon,
  SupportIcon,
  InstagramIcon,
  CheckIcon,
} from "./components/icons";

const queixas = [
  {
    icon: <AnxietyIcon />,
    title: "Ansiedade",
    description: "Pensamentos acelerados, tensão constante, dificuldade de sossegar",
    message: "Olá, Luan. Tenho sentido muita ansiedade e gostaria de conversar.",
  },
  {
    icon: <DepressionIcon />,
    title: "Depressão",
    description: "A vida perdeu o brilho, cansaço de se sentir assim",
    message: "Olá, Luan. Estou passando por um momento de depressão e gostaria de conversar.",
  },
  {
    icon: <TraumaIcon />,
    title: "Traumas emocionais",
    description: "Marcas do passado que ainda pesam no presente",
    message: "Olá, Luan. Gostaria de conversar sobre um trauma emocional.",
  },
  {
    icon: <SupportIcon />,
    title: "Ideação suicida",
    description: "Se a vida parece pesada demais, você não precisa enfrentar isso sozinho",
    message: "Olá, Luan. Preciso conversar com urgência.",
  },
];

const faq = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "É um encontro de acolhimento: conversamos sobre o que te trouxe até aqui, seu histórico e o que você espera da terapia. A partir daí, construímos juntos o plano de acompanhamento.",
  },
  {
    question: "A terapia online funciona mesmo?",
    answer:
      "Sim. Estudos e a prática clínica mostram eficácia equivalente à presencial para a maioria dos casos — com a vantagem de encaixar na sua rotina, de qualquer lugar do Brasil.",
  },
  {
    question: "Minhas informações são sigilosas?",
    answer:
      "Sim, integralmente. O sigilo profissional é um dos pilares éticos da Psicologia (Código de Ética do Psicólogo) — tudo o que é dito em sessão permanece entre nós.",
  },
];

const formacao = [
  {
    label: "Terapia Cognitivo-Comportamental (TCC)",
    text: "— abordagem que ajuda a entender, questionar e ressignificar os padrões mentais que mantêm o sofrimento",
  },
  {
    label: "Membro da Comunidade Brasileira de Psicoterapia (CBP)",
    text: "",
  },
  {
    label: "Supervisão clínica com Pablo Alex",
    text: ", psicólogo — Belo Horizonte/MG",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            jobTitle: siteConfig.role,
            description:
              "Psicólogo clínico atuando com depressão, ansiedade, ideação suicida e traumas emocionais. Terapia Cognitivo-Comportamental (TCC).",
            sameAs: [siteConfig.instagramUrl],
            address: { "@type": "PostalAddress", addressLocality: "Jacaraú", addressRegion: "PB", addressCountry: "BR" },
          }),
        }}
      />

      <div className="page">
        <div className="topbar">
          <span>
            <strong>{siteConfig.name}</strong> · {siteConfig.role}
          </span>
          <span className="handle">{siteConfig.instagramHandle}</span>
        </div>

        <div className="hero">
          <div className="portrait">
            <Image
              src="/images/luan-eduardo.jpg"
              alt="Luan Eduardo, psicólogo clínico"
              fill
              priority
              sizes="(max-width: 480px) 100vw, 480px"
              style={{ objectPosition: "center 22%" }}
            />
          </div>

          <div className="hero-quote">
            <span className="eyebrow">Psicoterapia individual</span>
            <h1>
              A dor que você carrega em silêncio <em>tem tratamento.</em>
            </h1>
            <p>
              Um espaço seguro de escuta, acolhimento e transformação — presencial em Jacaraú ou online para todo o
              Brasil.
            </p>
            <div className="crp-badge">{siteConfig.crp}</div>
          </div>

          <WhatsAppButton message="Olá, Luan. Gostaria de agendar uma conversa.">
            Falar com Luan no WhatsApp
          </WhatsAppButton>
        </div>

        <section id="queixas">
          <p className="section-label">Como posso ajudar</p>
          <h2 className="section-title">O que trouxe você até aqui?</h2>
          <div className="queixas">
            {queixas.map((q) => (
              <QueixaCard key={q.title} {...q} />
            ))}
          </div>
        </section>

        <section id="sobre">
          <p className="section-label">Sobre mim</p>
          <p className="about-pull">A terapia que liberta da depressão começa aqui.</p>
          <div className="about-body">
            <p>
              Sou <strong>{siteConfig.name}</strong>, psicólogo clínico ({siteConfig.crp}), com atuação voltada
              principalmente para casos de <strong>depressão, ansiedade, ideação suicida e traumas emocionais</strong>.
            </p>
            <p>
              Atendo presencialmente em Jacaraú e também de forma online para todo o Brasil, oferecendo um espaço
              seguro de escuta, acolhimento e transformação.
            </p>
            <p>
              Além de psicólogo, sou cristão, esposo e pai. Esses valores moldam meu compromisso com uma escuta
              ética, acolhedora e verdadeira. Acredito que ninguém precisa enfrentar a dor sozinho.
            </p>
          </div>
          <div className="formacao">
            {formacao.map((f) => (
              <div className="formacao-item" key={f.label}>
                <CheckIcon />
                <span>
                  <b>{f.label}</b>
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="atendimento">
          <p className="section-label">Como funciona</p>
          <h2 className="section-title">Formatos de atendimento</h2>
          <div className="atendimento-grid">
            <div className="atendimento-card">
              <span className="k">Presencial</span>
              <span className="v">Jacaraú, PB</span>
              <span className="s">Consultório físico, sessões semanais</span>
            </div>
            <div className="atendimento-card">
              <span className="k">Online</span>
              <span className="v">Todo o Brasil</span>
              <span className="s">Videochamada, mesma qualidade de escuta</span>
            </div>
          </div>
        </section>

        <section id="faq">
          <p className="section-label">Dúvidas comuns</p>
          <h2 className="section-title">Antes de começar</h2>
          <div className="faq">
            {faq.map((f) => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </section>

        <section className="final">
          <blockquote>
            Ninguém precisa <em>enfrentar a dor sozinho.</em>
          </blockquote>
          <WhatsAppButton message="Olá, Luan. Gostaria de agendar uma conversa.">
            Falar com Luan no WhatsApp
          </WhatsAppButton>
          <div className="socials">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </section>

        <footer>
          <span className="name">{siteConfig.name}</span>
          {siteConfig.role} · {siteConfig.crp}
          <br />© {new Date().getFullYear()} · Todos os direitos reservados
        </footer>
      </div>
    </>
  );
}
