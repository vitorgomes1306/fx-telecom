import logo from "../assets/fx-logo.png";
import { CONTACT } from "../data/config";
import "./SiteDisabled.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import logoAltersoft from "../assets/altersoft_logo_light.png";
function SiteDisabled() {
  return (
    <main className="site-disabled">
      <div className="site-disabled__glow site-disabled__glow--top" />
      <div className="site-disabled__glow site-disabled__glow--bottom" />

      <section
        className="site-disabled__card"
        aria-labelledby="site-disabled-title"
      >
        <img className="site-disabled__logo" src={logo} alt="FX Telecom" />

        <div className="site-disabled__icon" aria-hidden="true">
          <span />
        </div>

        <p className="site-disabled__eyebrow">Aviso importante</p>
        <h1 id="site-disabled-title">Site temporariamente desativado</h1>
        <p className="site-disabled__message">
          No momento, nosso site não está disponível. Para atendimento ou mais
          informações, fale com a nossa equipe.
        </p>

        <a
          className="btn btn-primary site-disabled__contact"
          href={`tel:+${CONTACT.phoneTel}`}
        >
          Ligue {CONTACT.phoneDisplay}
        </a>
        <br />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#999999",
            }}
          >
            Desenvolvido por
          </span>
          
          <Tippy
            content="Fábrica de Softwares (85) 99445-4472"
            placement="top"
            arrow={true}
          >
          <a
            href="https://altersoft.dev.br"
            target="_blank"
            rel="noopener noreferrer"
            title="Fábrica de Softwares (85) 99445-4472"
            aria-label="Altersoft — Fábrica de Softwares"
          >
            <img src={logoAltersoft} alt="Altersoft" width={100} />
          </a>
          </Tippy>
        </div>
      </section>
    </main>
  );
}

export default SiteDisabled;
