import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

import registration from './responses/registration.js';
import auth from './responses/auth.js';
import news from './responses/news.js';
import newsCard from './responses/newsCard.js';
import settings from './responses/settings.js';

const userInfo = {
  name: 'максим',
  lastName: 'жучков',
  login: 'max',
  email: 'max@ya.ru',
  password: '11aaAA#',//#11aaAA
  token: null
};

const cUserInfo = ({
  name,
  lastName,
  login,
  email,
  password,
  token,
}) => {
  userInfo.name = name;
  userInfo.lastName = lastName;
  userInfo.login = login;
  userInfo.email = email;
  userInfo.password = password;
  userInfo.token = token;
}

const regResp = registration(cUserInfo);
const reqAuth = auth(userInfo);
const reqSettings= settings(userInfo, cUserInfo);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS', 'GET, POST, PUT, PATCH, DELETE');
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

app.get('/api/news', news, (req, res, next) => {
  console.log('GET запрос для списка новостей');
});

app.get('/api/news/:id', newsCard, (req, res, next) => {
  console.log('GET запрос для списка карточки новости');
});

app.put('/api/settings', reqSettings, (req, res, next) => {
  console.log('PUT запрос на изменение пользователя');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.disable('etag');