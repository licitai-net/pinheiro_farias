const steps = [
  ["Escuta", "Entendimento do histórico profissional, função, rotina e motivo da consulta."],
  ["Documentos", "Leitura organizada de registros, mensagens, contratos, holerites e escalas."],
  ["Estratégia", "Definição de caminhos possíveis com linguagem clara e responsabilidade."],
  ["Acompanhamento", "Condução do caso com previsibilidade, técnica e comunicação objetiva."],
];

export function Method() {
  return (
    <section className="method section-grid" id="metodo" aria-labelledby="metodo-title">
      <div className="section-kicker" data-reveal>
        Método de atendimento
      </div>
      <div className="method-intro" data-reveal>
        <h2 id="metodo-title">Clareza antes da medida.</h2>
        <p>
          Antes de qualquer encaminhamento, buscamos compreender os fatos, organizar os
          documentos e explicar os caminhos possíveis com responsabilidade.
        </p>
      </div>
      <div className="timeline" data-stagger>
        {steps.map(([title, text], index) => (
          <article className="timeline-row" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
