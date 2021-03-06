const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const itensRouter = require('./routes/itensRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/itens', itensRouter);

app.get('/', (req, res, next) => {
  res.render('site/index', {
    titulo: 'Gerador de Declarações de Prova'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
