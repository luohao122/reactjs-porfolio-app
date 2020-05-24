const Post = require("../models/post");
const cuid = require('cuid');

exports.getAll = async function (req, res, next) {
  try {
    // Find all post and sort by createdAt desc order
    await Post.find()
      .sort("-createdAt")
      .exec(function (err, posts) {
        // Handle error if lost connection to db
        if (err) {
          res.status(500).send(err);
        }

        // Send list of posts as json
        res.json({ posts });
      });
  } catch (err) {
    // Handle network error
    res.send(err);
  }
};
