import delay from '../services/delay.js';
import bToken from '../services/bToken.js';

import newsData from '../data/news.js';

const news = async (req, res, next) => {
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
    res.contentType('application/json');
    res.status(200);
  
    res.send(newsData);
  }

  next();
}

export default news;