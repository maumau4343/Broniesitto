// app.js
const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const PORT = 8081;

// Middleware para receber dados de formulário e JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Arquivos estáticos (CSS, imagens, JS, etc.)
app.use(express.static("public"));
app.use(express.static('src/public'));

// Configuração do Handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Rotas principais
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/calculo", (req, res) => {
  res.render("calculos");
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});


// Rota 404 para páginas não encontradas
app.use((req, res) => {
  res.status(404).render("404"); // Lembre de criar a view views/404.handlebars
});

// Iniciar servidor
module.exports = app;
