import logoMark from "../assets/pinheiro-adc.svg";

const navItems = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Método", href: "#metodo" },
  { label: "Região", href: "#regiao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#inicio" aria-label="Pinheiro Farias Advogados">
        <span className="brand-symbol">
          <img src={logoMark} alt="" />
        </span>
        <strong>Pinheiro Farias</strong>
      </a>
      <nav aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
