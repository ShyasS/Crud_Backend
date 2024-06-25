const express = require('express');
const {getDatas,CreateData,getData,UpdateData,deleteData} = require('../controllers/controllers')
const router = express.Router();

router.route('/').get(getDatas).post(CreateData)
router.route('/:id').get(getData).put(UpdateData).delete(deleteData)

module.exports = router;