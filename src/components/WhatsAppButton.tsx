const phone = "5519981135596";
const message = encodeURIComponent(
  "Olá, gostaria de falar com o Pinheiro Farias Advogados sobre uma questão trabalhista.",
);

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4.8C9.9 4.8 5 9.5 5 15.4c0 2 .6 3.9 1.7 5.5L5.6 27.2l6.4-1.6c1.3.5 2.6.8 4 .8 6.1 0 11-4.8 11-10.6S22.1 4.8 16 4.8Z" />
        <path d="M12.6 10.5c-.2-.5-.4-.5-.8-.5h-.7c-.3 0-.7.1-1 .5-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.8 5.9 5.1 2.9 1.1 3.5.9 4.1.8.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.7-.5l-2.1-1c-.4-.1-.6-.2-.8.2-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.8.1-.4-.2-1.5-.5-2.8-1.7-1.1-1-1.8-2.1-2-2.5-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7l-1-2.3Z" />
      </svg>
    </a>
  );
}
