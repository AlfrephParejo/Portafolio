document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = this.querySelector('input[type="text"]').value.trim();
  const correo = this.querySelector('input[type="email"]').value.trim();
  const mensaje = this.querySelector('textarea').value.trim();

  if (!nombre || !correo || !mensaje) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Simulación de envío
  alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado.`);
  this.reset();
});
