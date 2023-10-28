const { TweetRepository } = require("../repository");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
    const tag = tags.map((tag) => tag.substring(1));
    console.log(tag);
    const tweet = await this.tweetRepository.create(data);
  }
}

module.exports = TweetService;

// this is my #first #tweet . I am really #excited
