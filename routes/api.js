const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');


// Routes

//get all
router.get('/search/:field_1/:field_2/:field_3', async(req, res, next) => {
    var field_1 =req.params.field_1;
    var field_2 =req.params.field_2;
    var field_3 =req.params.field_3;
    
    switch (field_2) {
        case 'is':
            try {
                var query = { [field_1] : field_3 };
                console.log(query);
                const result = await BlogPost.find(query)
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
            break;

        case 'contains':
            try {
                var query = { [field_1]: new RegExp( field_3 , 'i') };
                const result = await BlogPost.find(query)
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
            break;

        case 'smaller':
            try {
                var query = { [field_1]: { $lt: Number(field_3) } };
                const result = await BlogPost.find(query)
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
            break;

        case 'greater':
            try {
                var query = { [field_1]: { $gt: Number(field_3 )} };
                const result = await BlogPost.find(query)
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
            break;

        case 'any':
            try {
                const result = await BlogPost.find({},{__v:0});
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }

        default:
            try {
                const result = await BlogPost.find({},{__v:0});
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
    }
    
});

router.get('/', async(req, res, next) => {
        try {
 
            const result = await BlogPost.find({},{__v:0});
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }


});

router.get('/search/title/any', async(req, res, next) => {
    try {

        const result = await BlogPost.find({},{__v:0});
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }


});

//create new
router.post('/save', async (req, res, next) => {
    try {
        const newBlogPost = new BlogPost(req.body);
        const result = await newBlogPost.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});



module.exports = router;