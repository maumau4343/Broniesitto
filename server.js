const app = require('./src/app');
const port = process.env.PORT || 3031;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
