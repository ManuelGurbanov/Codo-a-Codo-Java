document.getElementById('LoginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (!email || !password) {
      event.preventDefault();
      alert('Por favor, complete todos los campos.');
    }
  });

