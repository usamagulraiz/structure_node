
const { body, validationResult } = require('express-validator');
var express = require('express');

// var router = express.Router()
exports.create = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid Email'),
  body('phone').notEmpty().isLength(5).withMessage('Phone No must have more than 5 characters'),
  body('status').notEmpty().withMessage('Status is required'),
]


