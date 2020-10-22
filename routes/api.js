const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');


// Routes


router.post('/delete', async (req, res, next) => {
    var id = req.body.id;

    const result = await BlogPost.deleteOne( {"_id": id});
    res.redirect('/'); 
   });


router.post('/update', async (req, res, next) => {
    var id = req.body.id;

    const result = await BlogPost.update( {"_id": id}, { $unset: { statuss: "awaiting"} } );
    res.redirect('/'); 
   });




//get all
router.get('/search/:field_1/:field_2/:field_3', async(req, res, next) => {
    var field_1 =req.params.field_1;
    var field_2 =req.params.field_2;
    var field_3 =req.params.field_3;
    
    switch (field_2) {



        case 'is':
            try {
                var query = { [field_1] : field_3 };
                const result = await BlogPost.find(query, query2)
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
            break;

        case 'contains':
            try {
                var query = { [field_1]: new RegExp( field_3 , 'i') };
                const result = await BlogPost.find(query, query2)
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
            break;

        case 'smaller':
            try {
                var query = { [field_1]: { $lt: Number(field_3) } };
                const result = await BlogPost.find(query, query2)
                res.send(result);
            } catch (error) {
                console.log(error.message);
            }
            break;

        case 'greater':
            try {
                var query = { [field_1]: { $gt: Number(field_3 )} };
                var query2 = { "statuss" : "awaiting"};
                const result = await BlogPost.find(query, query2)
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

        case 'mod':
            try {
                const result = await BlogPost.find({"statuss" : "awaiting"});
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


router.get('/mod', async(req, res, next) => {
    try {

        const result = await BlogPost.find({"statuss" : "awaiting"});
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