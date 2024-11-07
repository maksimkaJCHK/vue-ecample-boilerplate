import delay from '../services/delay.js';
import bToken from '../services/bToken.js';

// Не забыть дописать
const news = (cUserInfo) => {
  return async (req, res, next) => {
    const token = bToken();

    await delay();

    res.contentType('application/json');
    res.status(200);
  
    res.send([
      {
        id: 1,
        title: 'Заголовок первой новости',
        description: 'Какое-то описание для первой новости',
      },
      {
        id: 2,
        title: 'Заголовок второй новости',
        description: 'Какое-то описание для второй новости',
      },
      {
        id: 3,
        title: 'Заголовок третье новости',
        description: 'Какое-то описание для третье новости',
      },
      {
        id: 4,
        title: 'Заголовок четвертой новости',
        description: 'Какое-то описание для четвертой новости',
      },
      {
        id: 5,
        title: 'Заголовок пятой новости',
        description: 'Какое-то описание для пятой новости',
      },
      {
        id: 6,
        title: 'Заголовок шестой новости',
        description: 'Какое-то описание для шестой новости',
      },
      {
        id: 7,
        title: 'Заголовок седьмой новости',
        description: 'Какое-то описание для седьмой новости',
      },
      {
        id: 8,
        title: 'Заголовок восьмой новости',
        description: 'Какое-то описание для восьмой новости',
      },
      {
        id: 9,
        title: 'Заголовок девятой новости',
        description: 'Какое-то описание для девятой новости',
      },
      {
        id: 10,
        title: 'Заголовок десфтой новости',
        description: 'Какое-то описание для десфтой новости',
      },
    ]);
  
    next();
  }
}

export default news;