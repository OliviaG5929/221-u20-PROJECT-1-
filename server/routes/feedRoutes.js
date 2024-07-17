//const express = require ( 'express');
//const router = express.Router();

//let userController = require("../controllers/userController");

//router.route("/")
    //.get(userControlller.getAllUsers)
    //.get(userController.saveUser);


//router.route("/:userId")
    //.get(userController.getUser)
    //.delete((req, res)=>{userController.deleteUser(req, res)});

//module.exports = router;

const express = require('express');
const feedController = require('../controller/feedController');

const router = express.Router();

router.get('/feedItems', feedController.getAllFeedItems);

router.post('/feed', feedController.createFeedItems);
router.get('/feed/:id', feedController.getFeedItemsById);
router.put('/feed/:id', feedController.updateFeedItems);
router.delete('/feed/:id', feedController.deleteFeedItems);

module.exports = router;

