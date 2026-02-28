const form = document.getElementById("recruitForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const horas = document.getElementById("horas").value;

  let puntaje = 0;
  if (horas === "4+") puntaje += 30;
  if (horas === "2-3") puntaje += 20;
  if (horas === "1") puntaje += 10;

  const formData = new URLSearchParams();
  formData.append("nombre", document.getElementById("nombre").value);
  formData.append("edad", document.getElementById("edad").value);
  formData.append("pais", document.getElementById("pais").value);
  formData.append("telefono", document.getElementById("telefono").value);
  formData.append("fuente", document.getElementById("fuente").value);
  formData.append("puntaje", puntaje);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx8G8KvxxkOvP2FyCDBOAMr1kzUyGTgoaRUPTdePO8BBE2MwrwhOju9V0jAeqH0qBmq/exec", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    mensaje.innerHTML = "Postulación enviada ✔ ID: " + result.id;
    form.reset();

  } catch (error) {
    mensaje.innerHTML = "Error al enviar. Intenta nuevamente.";
    console.error(error);
  }
});
