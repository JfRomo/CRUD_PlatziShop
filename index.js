const express = require("express");
const routerApi = require('./routes/index')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola!, muy buenas');
})

app.get('/home', (req, res) => {
  res.send('Bienvenido a este sitio web');
})

app.listen(port, () => {
  console.log('Escuchanding en el puerto ' + port);
})

routerApi(app);
