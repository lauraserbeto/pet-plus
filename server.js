const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Criar banco SQLite
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err.message);
  } else {
    console.log("Conectado ao banco SQLite.");
  }
});

// Criar tabela de usuários (se não existir)
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT,
    nome TEXT,
    documento TEXT UNIQUE,
    email TEXT UNIQUE,
    senha TEXT
  )
`);

// Rota de cadastro
app.post("/cadastro", (req, res) => {
  const { tipo, nome, documento, email, senha } = req.body;

  db.run(
    `INSERT INTO users (tipo, nome, documento, email, senha) VALUES (?, ?, ?, ?, ?)`,
    [tipo, nome, documento, email, senha],
    function (err) {
      if (err) {
        return res.status(400).json({ error: "Usuário já existe ou erro no cadastro." });
      }
      res.json({ message: "Cadastro realizado com sucesso!", id: this.lastID });
    }
  );
});

// Rota de login
app.post("/login", (req, res) => {
  const { documento, email, senha } = req.body;

  db.get(
    `SELECT * FROM users WHERE (documento = ? OR email = ?) AND senha = ?`,
    [documento, email, senha],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Erro no servidor." });
      }
      if (!row) {
        return res.status(401).json({ error: "Login inválido." });
      }
      res.json({ message: "Login bem-sucedido!" });
    }
  );
});

// Subir servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
