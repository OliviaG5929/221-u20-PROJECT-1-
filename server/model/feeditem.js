class FeedItem {
    constructor(id, title, body, linkUrl, imageUrl) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
        this.caseOH = caseOH;
    }
}

exports.createFeedItem = function(id, title, body, linkUrl, imageUrl, caseOH) {
    return new FeedItem(id, title, body, linkUrl, imageUrl,caseOH);
  };