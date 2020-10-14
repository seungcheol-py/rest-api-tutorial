const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// 모든 포스트를 보여준다.
// const posts = await Post.find();

// submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// specific post
// /:~~ dynamic parameter
router.get("/:postId", async (req, res) => {
  // this takes some time. because it's coming from a db
  try {
    const post = await Post.findById(req.params.postId);
    res.send(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({
      // mongo가 _id를 생성한다.
      _id: req.params.postId,
    });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
// Update a post
router.patch("/:postId", async (req, res) => {
  // search by id and change information
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

// router.post("/", (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });
//   // save it to our db
//   post
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ message: err });
//     });
// });
