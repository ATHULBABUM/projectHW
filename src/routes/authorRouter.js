var express = require("express");
var authorsRouter = express.Router();
var {authorModel}=require('../models/authorModels')
function router(nav) {
    var auth;
    
    // var authors = [
    //     {
    //         Name: "Suzanne Collins",
    //         Bestbooks: "The Hunger Games",
    //         age: " 50",
    //         image: "suzanne.jpg"

    //     },
    //     {
    //         Name: "Madeleine",
    //         Bestbooks: " Wrinkle In Time ",
    //         age: "48",
    //         image: "madeleine.jpg"
    //     },
    //     {

    //         Name: "Richard Adams",
    //         Bestbooks: " Water Ship Down ",
    //         age: "57",
    //         image: "Richard.jpg"

    //     },
    //     {

    //         Name: "J.K Rowling",
    //         Bestbooks: " Harry Potter ",
    //         age: "60",
    //         image: "J.Kr.jpg"
    //     },

    // ]
    authorsRouter.route('/')
        .get((req, res) => {
            authorModel.find((err,data)=>{
                if(err){
                    throw err;
                }else{
                    auth=data
                    res.render(
                        'authors.ejs',
                        {
                            nav,
                            title: 'Authors',
                            authors:data
                        }
                    );
                }
            })
        });


    authorsRouter.route('/add')
        .get((req,res)=>{
            res.render(
                'addauthors.ejs',{
                    nav,
                    title:'Add Authors',
                    
                }
            )
        })
    
    authorsRouter.route('/save')
        .post((req,res)=>{
            var addauthor=new authorModel(req.body)
            addauthor.save((err,data)=>{
                if(err){
                    res.json({status:"error"});
                    throw err
                }else{
                    res.json({status:"success"})
                }
            })
        });

    authorsRouter.route('/:id')
        . get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "Authors",
                    author: auth[id],
                })

        });

    return authorsRouter;
}
module.exports = router;
















