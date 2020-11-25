const { body, validationResult } = require('express-validator');

let divisionRequestValidations = () => {
  return [
      body('factors').isArray({min: 2}).withMessage('Factors should be an array with at least 2 positions'),
      body('factors.*').isNumeric().withMessage('Factors must contain only numeric values'),
      body('factors.*').custom((value) => value != 0).withMessage('Factors cant be Zero')

  ]
};

let checkValidations = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    log.error('validations /','Bad request');
    return res.status(httpBadRequest).json({message: 'Check errors for details',errors: errors.array()});
};

module.exports = { divisionRequestValidations, checkValidations};