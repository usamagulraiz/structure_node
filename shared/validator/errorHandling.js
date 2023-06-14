const { body, validationResult } = require('express-validator');

module.exports = async (req, res, next) => {
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array(), message: 'Invalid form' });
  } else {
    next()
  }



}

