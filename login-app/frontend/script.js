function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('msg').textContent = data.message;
    document.getElementById('msg').style.color = data.success ? 'green' : 'red';
  })
  .catch(() => {
    document.getElementById('msg').textContent = 'Erro de conexão com o servidor.';
    document.getElementById('msg').style.color = 'red';
  });
}