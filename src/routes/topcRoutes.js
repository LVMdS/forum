const express = require('express');
const topicController = require('../controllers/topicController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, topicController.createTopic);
router.get('/', topicController.getTopics);
router.put('/:id', authMiddleware, topicController.updateTopic);
router.delete('/:id', authMiddleware, topicController.deleteTopic);

module.exports = router;
