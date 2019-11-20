var express=require("express")
var booksRouter=express.Router()
var {bookModel}=require('../models/bookModels');
function router(nav){
    var test;
// var books =
// [
//     {
//         title:"The Hunger Games",
//         genre:" Fiction",
//         author:"Suzanne collins",
//         image:"im1.jpg"

//     },
//     {
//         title:" Wrinkle In Time ",
//         genre:" Fiction",
//         author:"Madeleine",
//         image:"im2.jpg"

//     },
//     {
//         title:"Water Ship Down",
//         genre:"Fiction",
//         author:"Richard Adams",
//         image:"im3.jpg"

//     },
//     {
//         title:"Harry Potter",
//         genre:"Fiction",
//         author:"J.K Rowling",
//         image: "im4.jpg"
//     },
   
// ]

booksRouter.route('/')
    .get((req, res) => {
        bookModel.find((err,data)=>{
            if(err){
                throw err;
            }else{
                test=data;
                res.render(
                    'books',
                    {
                        nav,
                        title: "Books",
                       books:data   ,
                            
                    }
                );
            }
        })
    
       
    });
    booksRouter.route('/add')
    .get((req, res) => {
        res.render(
            'addbooks.ejs',
            {
                nav,
                title: "Add Books"              
            }
        );
    });
    booksRouter.route('/save')
    .post((req, res) => {
        var addbook=new bookModel(req.body);
        addbook.save((err,data)=>{
            if(err){
                res.json({status:"error"});
                throw err

            }else{
                res.json({status:"success"});
            }

        })
    
    
    });

    booksRouter.route('/:id')
    .get((req, res) => {
        const id =req.params.id;
        res.render(
            'book',
            {
                nav,
                title: "Books",
                book:test[id]            
            })
        });
        return booksRouter;
    }
     module.exports=router;