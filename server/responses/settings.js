import delay from '../services/delay.js';
import bToken from '../services/bToken.js';

const settings = (userInfo, cUserInfo) => {
  return async (req, res, next) => {
    const token = bToken();

    await delay();

    const reqToken = Number(req.headers.authorization.replace(/Bearer /, ''));

    if (reqToken !== token) {
      res.status(401);

      res.send({
        status: 'error',
        message: 'Нужно перелогиниться'
      });
    }

    if (reqToken === token) {
      const {
        name,
        lastName,
        login,
        email,
        password,
        oldPassword,
      } = req.body;

      if (userInfo.password !== oldPassword) {
        res.status(400);
  
        res.send({
          status: 'error',
          message: 'Старый пароль введен не правильно'
        });
      }
  
      if (userInfo.password === oldPassword) {
  
        cUserInfo({
          name,
          lastName,
          login,
          email,
          password,
          token
        });

        res.contentType('application/json');
        res.status(200);
      
        res.send({
          status: 'ок',
          message: 'Данные пользователя успешно изменены',
          token
        });
      }
    }

    next();
  }
}

export default settings;