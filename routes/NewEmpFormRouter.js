const express = require('express');
const empsyscontroller = require('../controllers/EmpsysController');

const router = express.Router();

router.get('/', empsyscontroller.OpenNewEmpPage);
router.post('/AppendEmp', empsyscontroller.GetNewEmpSubmitResult);

module.exports = router;