
const express = require('express');
const router = express.Router();
const feedController = require('../controller/feedController'); 

router.get('/feed-items', feedController.getAllFeedItems);
router.post('/feed-items', feedController.createFeedItems);
router.put('/feed-items/:id', feedController.updateFeedItems);
router.delete('/feed-items/:id', feedController.deleteFeedItems);

module.exports = router