const router = require('express').Router();
const { getThoughts, getSingleThought, createThought } = require('../controllers/thoughtController');

router.route('/api/thoughts').get(getThoughts).post(createThought);
router.route('/api/thoughts/:thoughtId').get(getSingleThought);









module.exports = router;