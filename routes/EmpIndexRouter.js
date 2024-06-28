const express = require('express');
const empindexcontroller = require('../controllers/EmpIndexController');
const empsearchrouter = require('../routes/EmpSearchPageRouter');
const newempformrouter = require('../routes/NewEmpFormRouter');

const router = express.Router();

router.use('/newempform', newempformrouter);
router.use('/empInfform', empsearchrouter);

router.get('/', empindexcontroller.GetEmpsysIndexPage);
router.get('/first', empindexcontroller.GetEmpsysFirstPage);
router.get('/error', empindexcontroller.GetEmpsysErrorPage);

module.exports = router;