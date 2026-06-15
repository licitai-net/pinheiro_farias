export function Region() {
  const cities = ["Campinas", "Valinhos", "Hortolandia", "Sumare"];

  return (
    <section className="region section-grid" id="regiao" aria-labelledby="regiao-title">
      <div className="section-kicker" data-reveal>
        Presença regional
      </div>
      <div className="region-panel" data-reveal>
        <span className="region-label">Base de atendimento</span>
        <strong>Campinas</strong>
        <p>Atuação trabalhista para trabalhadores da região metropolitana.</p>
      </div>
      <div className="region-copy" data-reveal>
        <h2 id="regiao-title">Campinas e região, com leitura próxima da realidade profissional.</h2>
        <p>
          Atendemos trabalhadores de Campinas e cidades próximas com atuação trabalhista
          voltada à análise técnica de cada situação.
        </p>
        <div className="city-list" aria-label="Cidades atendidas">
          {cities.map((city) => (
            <span key={city}>{city}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
