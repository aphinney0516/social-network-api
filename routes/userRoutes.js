const router = require('express').Router();
const { getUsers, getSingleUser, createUser, addFriend, removeFriend, deleteUser } = require('../controllers/userController');

router.route('/api/users').get(getUsers).post(createUser);
router.route('/api/users/:userId').get(getSingleUser).delete(deleteUser);
router.route('/api/users/:userId/friends/:friendId').put(addFriend).delete(removeFriend);








module.exports = router;