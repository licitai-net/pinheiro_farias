const areas = [
  {
    name: "Bancários",
    text: "Análise de jornada, metas, verbas e histórico funcional com atenção técnica.",
  },
  {
    name: "Vigilantes",
    text: "Atuação voltada a rotinas de escala, adicionais e condições específicas da função.",
  },
  {
    name: "Escolta armada",
    text: "Leitura criteriosa de risco, deslocamento, documentação e composição remuneratória.",
  },
  {
    name: "Portaria",
    text: "Avaliação de jornada, intervalos, acúmulo de função e registros de trabalho.",
  },
  {
    name: "Telecomunicações",
    text: "Exame de metas, produtividade, contratos e dinâmica de equipes operacionais.",
  },
  {
    name: "Telemarketing",
    text: "Atenção a pausas, jornada, pressão operacional e documentação disponível.",
  },
];

export function PracticeAreas() {
  return (
    <section className="practice section-grid" id="atuacao" aria-labelledby="atuacao-title">
      <div className="section-kicker" data-reveal>
        Atuação especializada
      </div>
      <div className="section-heading" data-reveal>
        <h2 id="atuacao-title">Foco trabalhista para rotinas profissionais complexas.</h2>
        <p>
          Avaliamos vínculos, jornadas, verbas, escalas e documentos com atenção às
          particularidades de cada atividade profissional.
        </p>
      </div>
      <div className="area-grid" data-stagger>
        {areas.map((area, index) => (
          <article className="area-card" key={area.name}>
            <div className="area-card-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i aria-hidden="true" />
            </div>
            <h3>{area.name}</h3>
            <p>{area.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
