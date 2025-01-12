const userController = require('../controllers/user_controller')
const express = require('express')
const router = express.Router()

const userAuth = require('../middlewares/user_auth')

// router.get('/', userController.getAllStudent)
// router.get('/:id', userController.getStudentById)
// router.post('/', userController.addStudent)
// router.delete('/:id', userController.deleteStudent)

// Versi 2.0
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', '../index.html'));
// });

router.get('/', userController.getAllStudent)
router.get('/:id', userController.getStudentById)
router.post('/', userController.addStudent)
router.delete('/:id', userController.deleteStudent)

// res.sendFile(path.join(__dirname, 'public', 'index.html'));

module.exports = router