var express = require('express');
// const { createUserValidation } = require('../shared/validator');
const { body, validationResult } = require('express-validator');
const Validator = require('../shared/validator/user');
const ErrorHandling = require('../shared/validator/errorHandling');
const auth = require('../shared/auth');

var router = express.Router();


/* GET users listing. */
router.post('/create', [Validator.create, ErrorHandling], auth, function (req, res, next) {
  console.log(req.body)
  // const result = validationResult(req);

  // console.log(result)

  // if (result.isEmpty()) {
  //   console.log('empty')

  // }

  res.status(200).json({ message: 'my custom msg', data: [] })
});

module.exports = router;
