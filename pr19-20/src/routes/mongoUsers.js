const { Router } = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser } =
  require('../controllers/mongoUsersController');

const router = Router();

router.post('/',      createUser);
router.get('/',       getUsers);
router.get('/:id',    getUserById);
router.patch('/:id',  updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
