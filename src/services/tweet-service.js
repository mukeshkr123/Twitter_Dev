import { TweetRepository, HashTagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashTagRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
    const tag = tags.map((tag) => tag.substring(1));
    console.log("tags", tags);
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    let titleOfPresenttags = alreadyPresentTags.map((tags) => tags.title);
    let newTags = tags.filter((tag) => !titleOfPresenttags.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    const res = alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }
}

export default TweetService;
