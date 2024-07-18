const FeedItem = require('../model/feeditem'); // Make sure this path is correct

let feedItems = [];
let currentId = 1;

// Initial seed data
let one = FeedItem.createFeedItem(
    currentId++,
    "college",
    "teachers",
    "roses",
    "NewYork",
    "caseOH",
    "DressToImpress"
);
feedItems.push(one);
console.log(feedItems);

// GET all feed items
exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(feedItems);
};

// POST a new feed item
exports.createFeedItems = (req, res) => {
    const { Marist, School, Flower, city, Youtuber, Game } = req.body;
    
    // Validate request body
    if (!Marist || !School || !Flower || !city || !Youtuber || !Game) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    const newFeedItem = FeedItem.createFeedItem(
        currentId++,
        Marist,
        School,
        Flower,
        city,
        Youtuber,
        Game
    );

    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(newFeedItem);
};

// PUT (update) a feed item by ID
exports.updateFeedItems = (req, res) => {
    const { id } = req.params;
    const { Marist, School, Flower, city, Youtuber, Game } = req.body;

    const feedItem = FeedItems.find(item => item.id === parseInt(id));
    if (feedItem) {
        feedItem.Marist = Marist || feedItem.Marist;
        feedItem.School = School || feedItem.School;
        feedItem.Flower = Flower || feedItem.Flower;
        feedItem.city = city || feedItem.city;
        feedItem.Youtuber = Youtuber || feedItem.Youtuber;
        feedItem.Game = Game || feedItem.Game;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(feedItem);
    } 
    else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};

// DELETE a feed item by ID
exports.deleteFeedItems = (req, res) => {
    const { id } = req.params;
    const index = feedItems.findIndex(item => item.id === parseInt(id));

    if (index !== -1) {
        const deletedItem = feedItems.splice(index, 1);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(deletedItem[0]);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};