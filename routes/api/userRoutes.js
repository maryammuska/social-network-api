const router = require("express").Router();

const { getUsers,  getOneUser, createNewUser, updateUser, deleteUser, addFriend, removeFriend} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createNewUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);


module.exports = router;