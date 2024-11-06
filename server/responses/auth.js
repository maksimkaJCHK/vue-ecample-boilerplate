import delay from '../services/delay.js';
import bToken from '../services/bToken.js';

const auth = (userInfo) => {
  return async (req, res, next) => {
    const { login, password } = req.body;

    res.contentType('application/json');

    await delay();

    if (userInfo.login === login && userInfo.password === password) {
      res.status(200);

      res.send({
        cPassword: userInfo.password,
        cEmail: userInfo.email,
        cLogin: userInfo.login,
        cLastName: userInfo.lastName,
        cName: userInfo.name,
        cToken: bToken()
      });
    }

    if (userInfo.login !== login || userInfo.password !== password) {
      res.status(400);
      res.send({
        status: 'error',
        message: 'Не верное имя пользователя, или пароль'
      });
    }

    next();
  }
}

export default auth;