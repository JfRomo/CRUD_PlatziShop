const express = require("express");
const routerApi = require('./routes/index')
const { errorLogger, errorHandler, boomErrorHandler } = require ('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola!, muy buenas');
})

app.get('/home', (req, res) => {
  res.send('Bienvenido a este sitio web');
})


routerApi(app);

app.use(errorLogger)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Escuchanding en el puerto ' + port);
})

