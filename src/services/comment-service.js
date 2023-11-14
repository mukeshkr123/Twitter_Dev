import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.commentRepository = new CommentRepository();
  }

  async create(modelId, modelType, userId, content) {
    console.log(modelId, modelType, userId, content);
    if (modelType === "Tweet") {
      console.log("Inside model type");
      var commentable = await this.tweetRepository.get(modelId);
    } else if (modelType === "Comment") {
      var commentable = await this.commentRepository.get(modelId);
    } else {
      throw new Error("Invalid model type");
    }

    const comment = await this.commentRepository.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });

    commentable.comments.push(comment);
    await commentable.save();

    console.log(commentable);

    return comment;
  }
}

export default CommentService;
