const proofPoints = [
  "Atuação trabalhista especializada",
  "Leitura técnica de documentos e histórico profissional",
  "Comunicação clara antes de qualquer medida",
];

export function Authority() {
  return (
    <section className="authority section-grid" aria-labelledby="autoridade-title">
      <div className="section-kicker" data-reveal>
        Autoridade institucional
      </div>
      <div className="authority-statement" data-reveal>
        <h2 id="autoridade-title">
          Rigor jurídico começa antes do primeiro contato.
        </h2>
        <p>
          Cada caso exige escuta, estudo dos documentos e uma estratégia compatível com a
          realidade profissional de quem procura orientação.
        </p>
      </div>
      <div className="proof-stack" data-stagger>
        {proofPoints.map((point, index) => (
          <div className="proof-item" key={point}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
