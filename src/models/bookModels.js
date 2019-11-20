var mongoose =require('mongoose');
var bookModel=mongoose.model('students',{
title:"string",
author:"string",
genre:"string",    //data base created
image:"string"
})
 module.exports={bookModel}