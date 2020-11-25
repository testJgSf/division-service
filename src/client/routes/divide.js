let express = require('express');
let router = express.Router();
let { main } = require('../../business/divisionController');
let { divisionRequestValidations, checkValidations } = require('../../business/utils/divisionRequestValidations');

router.post('/divide', [divisionRequestValidations(), checkValidations],(req, res) =>{
  const response = main(req.body.factors);
  res.status(response.code).json(response.body);
});

module.exports = router;
