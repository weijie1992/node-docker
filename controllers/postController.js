const Post = require('../models/postModel');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res
      .status(200)
      .json({ status: 'Success', results: posts.length, data: { posts } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.getOnePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  try {
    res.status(200).json({ status: 'Success', data: { post } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.createPost = async (req, res, next) => {
  const post = await Post.create(req.body);
  try {
    res.status(200).json({ status: 'Success', data: { post } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.updatePost = async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  try {
    res.status(200).json({ status: 'Success', data: { post } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.deletePost = async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id, );
  try {
    res.status(200).json({ status: 'Success', data: { post } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};
