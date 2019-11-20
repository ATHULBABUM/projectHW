var mongoose=require('mongoose');
var authorModel=mongoose.model('config',{
    name:"string",
    country:"string",
    image:"string"
})
module.exports={authorModel}