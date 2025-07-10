const express=require('express');

const Routes=express.Router();

const {getPosts,createPosts}=require('../Controllers/PostController');

Routes.get('/',getPosts);
Routes.post('/',createPosts);

module.exports=Routes;