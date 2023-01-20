// imports

const hbs = require('hbs');
const path = require('path');
const express = require('express');

// Create express app

const dataPath = path.join(__dirname, '../data');
const viewsPath = path.join(__dirname, '../views/pages');
const partialsPath = path.join(__dirname, '../views/pages/partials');
const publicPath = path.join(__dirname, '../public');
const port = 81;
const app = express();

// Setup handlebars engine and views location

app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));

// routes
root = (req, res) => {
  res.render('index', {
    title: 'Portfolio',
  });
};

app.get('/', root);

app.listen(port, () => {console.log("Server started on http://localhost:" + port)});