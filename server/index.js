import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

import registration from './responses/registration.js';
import auth from './responses/auth.js';
import news from './responses/news.js';

let userInfo = {
  name: 'максим',
  lastName: 'жучков',
  login: 'max',
  email: 'max@ya.ru',
  password: '11aaAA#',
  token: null
};

const cUserInfo= ({
  name,
  lastName,
  login,
  email,
  password,
  token,
}) => {
  userInfo = {
    name,
    lastName,
    login,
    email,
    password,
    token,
  }
}
const regResp = registration(cUserInfo);
const reqAuth = auth(userInfo);
const reqNews = news(userInfo.token);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(bodyParser.json());

app.post('/api/registration', regResp, (req, res, next) => {
  console.log('Post запрос для формы регистрации');
});

app.post('/api/auth', reqAuth, (req, res, next) => {
  console.log('Post запрос для формы авторизации');
});

app.get('/api/news', reqNews, (req, res, next) => {
  console.log('GET запрос для списка новостей');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.disable('etag');