import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      maxLength: [250, "Tweet cannot be more than 250 characters"],
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
