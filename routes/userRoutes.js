const router = require('express').Router();
const { getUsers, getSingleUser, createUser, addFriend } = require('../controllers/userController');

router.route('/api/users').get(getUsers).post(createUser);
router.route('/api/users/:userId').get(getSingleUser);
router.route('/api/users/:userId/friends/:friendId').put(addFriend);








module.exports = router;