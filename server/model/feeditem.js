// feeditem.js
class FeedItem {
    constructor(id, Marist, School, Flower, city, Youtuber, Game) {
        this.id = id;
        this.Marist = Marist;
        this.School = School;
        this.Flower = Flower;
        this.city = city;
        this.Youtuber = Youtuber;
        this.Game = Game;
    }

    // Factory method to create a new FeedItem
    static createFeedItem(id, Marist, School, Flower, city, Youtuber, Game) {
        return new FeedItem(id, Marist, School, Flower, city, Youtuber, Game);
    }
}

module.exports = FeedItem;