const express = require('express')
const router = express.Router()
const controller=require('../controllers/TodoController')

router.get('/',controller.get_all_todos)
router.post('/find',controller.post_find_todo)
router.post('/',controller.post_new_todo)
router.patch('/',controller.patch_todo)
router.delete('/',controller.delete_todo)

module.exports = router;
