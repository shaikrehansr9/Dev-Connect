//this is for the get or post data 
//here we get the existing post or create a new post and save in db

const Post = require('../models/Post');

exports.getPosts= async (req,res) => {

    const posts=await Post.find().sort({createdAt:-1});
    res.json(posts);

}
exports.createPosts=async(req,res) => {
    const newPost=new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
}