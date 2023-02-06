const router = require('express').Router();
const { getThought, getSingleThought, createThought } = require('../controllers/thoughtController');

router.route('/api/thoughts').get(getThought).post(createThought);
router.route('/api/thoughts/:thoughtId').get(getSingleThought);









module.exports = router;