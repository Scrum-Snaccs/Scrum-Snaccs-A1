const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');


// Routes

//get all
router.get('/', async(req, res, next) => {
    try {
        const result = await newBlogPost.find({},{__v:0});
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

//create new
router.post('/', async (req, res, next) => {
    try {
        const newBlogPost = new BlogPost(req.body);
        const result = await newBlogPost.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});



module.exports = router;