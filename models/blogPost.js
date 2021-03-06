const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    statuss: String,
    title: String,
    author: String,
    type: String,
    pages: Number,
    volume: Number,
    method: String,
    participants: String,
    year: Number,
    postdate: {
        type: Date,
        default: Date.now()
    }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports =  BlogPost;