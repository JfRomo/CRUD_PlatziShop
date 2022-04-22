const express = require("express");
const routerApi = require('./routes/index')
const { errorLogger, errorHandler, boomErrorHandler } = require ('./middlewares/error.handler')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const whitelist = ['http://127.0.0.1:5500/', 'www.jfromo.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido!'))
    }
  }
}
app.use(cors())


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

