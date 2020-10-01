const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    author: String,
    type: String,
    pages: String,
    volume: String,
    method: String,
    participants: String,
    year: String,
    postdate: {
        type: Date,
        default: Date.now()
    }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports =  BlogPost;