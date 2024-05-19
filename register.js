document.getElementById('registerForm').addEventListener('submit', function(event) {
  var name = document.getElementById('nameInput').value;
  var lastName = document.getElementById('lastNameInput').value;
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;
  var nacimiento = document.getElementById('nacimientoInput').value;
  var pais = document.getElementById('paisSelect').value;
  var termsAccepted = document.getElementById('termsCheck').checked;

  if (!name || !lastName || !email || !password || !nacimiento || !pais || !termsAccepted) {
    event.preventDefault();
    alert('Por favor, complete todos los campos y acepte los Términos y Condiciones.');
  }
});