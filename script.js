// Antes de publicar, substitua pelo WhatsApp da ONG no formato internacional:
 // Exemplo: 5511999999999 (55 + DDD + número, sem espaços ou símbolos).
const WHATSAPP_ONG = "5511942748494";
const link = document.getElementById("whatsapp-link");
if (WHATSAPP_ONG !== "COLOCAR_NUMERO_AQUI") {
  const message = encodeURIComponent("Olá! Vi a campanha Laços de Amor e gostaria de informações sobre adoção responsável.");
  link.href = `https://wa.me/${WHATSAPP_ONG}?text=${message}`;
} else {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("O WhatsApp da ONG ainda será configurado antes da publicação.");
  });
}
