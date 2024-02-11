const router = require("express").Router();
const Post = require("../models/Post");

// posting a post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      categories: req.body.categories,
      description: req.body.description,
      image: req.body.image,
      username: req.body.username,
    });

    const post = await newPost.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// updating a post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only edit your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// deleting a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.deleteOne({ _id: req.params.id });
        res.status(200).json("Post has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete Your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting a single post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status.send(500).json(err);
  }
});

// getting all post

router.get("/", async (req, res) => {
  const userName = req.query.user;
  const categoryName = req.query.category;

  try {
    let posts;

    if (userName) {
      posts = await Post.find({ username: userName });
    } else if (categoryName) {
      posts = await Post.find({ categories: { $in: [categoryName] } });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
