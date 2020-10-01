const express = require ('express');
const mongoose = require ('mongoose')
const morgan = require('morgan');   
const path = require ('path');

const app = express ();
const PORT = process.env.PORT || 8080;



app.use(morgan('tiny')); //http request, every http request is made it will be logged and be able to view in terminal
app.get('/api',(req,res)=> 
 {
     const data =
     {
         username: 'accimessrerlin',
         age:5
     };
     res.json(data);
 })

 app.get('/api/name',(req,res)=> 
 {
     const data =
     {
         username: 'peterson',
         age:5
     };
     res.json(data);
 });

 app.listen(PORT,console.log(`Server is starting at ${PORT}`));