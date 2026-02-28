const form = document.getElementById("recruitForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const horas = document.getElementById("horas").value;

  let puntaje = 0;

  if (horas === "4+") puntaje += 30;
  if (horas === "2-3") puntaje += 20;
  if (horas === "1") puntaje += 10;

  const data = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    pais: document.getElementById("pais").value,
    telefono: document.getElementById("telefono").value,
    fuente: document.getElementById("fuente").value,
    puntaje: puntaje
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx8G8KvxxkOvP2FyCDBOAMr1kzUyGTgoaRUPTdePO8BBE2MwrwhOju9V0jAeqH0qBmq/exec", {
    method: "POST",
    body: new URLSearchParams(data)
  });
  
  const result = await response.json();

    mensaje.innerHTML = "Postulación enviada ✔ ID: " + result.id;
    form.reset();

  } catch (error) {
    mensaje.innerHTML = "Error al enviar. Intenta nuevamente.";
  }
});
