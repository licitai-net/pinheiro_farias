export function Contact() {
  return (
    <section className="contact section-grid" id="contato" aria-labelledby="contato-title">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Próximo passo</p>
        <h2 id="contato-title">Quando a situação pede análise, o primeiro gesto deve ser claro.</h2>
        <p>
          Envie seus dados e um breve resumo do caso. Nossa equipe retornará para orientar os
          próximos passos.
        </p>
        <address className="office-address">
          <strong>Pinheiro Farias Advogados</strong>
          <span>Avenida Campos Sales, 532 – Sala 143</span>
          <span>Centro Campinas</span>
          <span>CEP: 13.010-081</span>
        </address>
      </div>
      <form
        className="contact-form"
        data-reveal
        onSubmit={(event) => {
          event.preventDefault();
          window.dispatchEvent(new CustomEvent("pinheiro-farias-contact-intent"));
        }}
      >
        <label>
          Nome
          <input name="name" autoComplete="name" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          Telefone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Mensagem
          <textarea name="message" rows={5} />
        </label>
        <button className="button primary" type="submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
