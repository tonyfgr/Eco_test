const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
  res.render('inicio');
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

app.get('/servicios', (req, res) => {
  res.render('servicios');
});

app.get('/clientes', (req, res) => {
  res.render('clientes');
});

app.get('/contacto', (req, res) => {
  res.render('contacto');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
