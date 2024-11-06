import delay from '../services/delay.js';
import bToken from '../services/bToken.js';

const registration = (cUserInfo) => {
  return async (req, res, next) => {
    const token = bToken();

    await delay();

    cUserInfo({
      ...req.body,
      token
    });

    res.contentType('application/json');
    res.status(200);
  
    res.send({
      token
    });
  
    next();
  }
}

export default registration;