import logoMark from "../assets/pinheiro-adc.svg";

const footerLinks = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Método", href: "#metodo" },
  { label: "Região", href: "#regiao" },
  { label: "Contato", href: "#contato" },
];

const practiceAreas = ["Bancários", "Vigilantes", "Portaria", "Telecomunicações"];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="#inicio" aria-label="Pinheiro Farias Advogados">
            <span>
              <img src={logoMark} alt="" />
            </span>
            <strong>Pinheiro Farias</strong>
          </a>
          <p>
            Advocacia trabalhista com atuação técnica em Campinas e região.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <span>Seções</span>
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-areas">
          <span>Atuação</span>
          {practiceAreas.map((area) => (
            <p key={area}>{area}</p>
          ))}
        </div>

        <div className="footer-contact">
          <span>Contato</span>
          <p>Envie uma mensagem com seus dados e um breve resumo do caso.</p>
          <a className="footer-cta" href="#contato">
            Falar com o escritório
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pinheiro Farias Advogados. Todos os direitos reservados.</p>
        <p>As informações deste site não substituem análise jurídica individualizada.</p>
      </div>
    </footer>
  );
}
