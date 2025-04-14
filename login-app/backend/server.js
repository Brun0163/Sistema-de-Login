const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const USERS_FILE = './backend/users.json';

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Login bem-sucedido!' });
  } else {
    res.status(401).json({ success: false, message: 'Usuário ou senha incorretos.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});