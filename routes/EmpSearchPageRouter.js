const express = require('express');
const empsyscontroller = require('../controllers/EmpsysController');

const router = express.Router();

router.get('/', empsyscontroller.OpenSearchEmpPage);
router.get('/getall', empsyscontroller.GetSearchAllEmp);
router.get('/getone/:empno', empsyscontroller.GetSearchOneEmp);

module.exports = router;