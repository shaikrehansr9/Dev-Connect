//we will define the post how it looks in mongodb

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: String,
    title: String,
    description: String,
    media: String,
    type: String,


}, { timestamps: true });

module.export = mongoose.model("post", postSchema);


