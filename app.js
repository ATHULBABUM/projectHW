var bodyparser=require('body-parser');
var cors     = require('cors');
var express = require("express");
var chalk = require("chalk");
var path = require("path");
var app  = new express();
const mongoose=require('mongoose');

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({
    extended:true }));
var nav= [
    { link: '/', title: 'Home' },
    { link: '/signup', title: 'Signup'}, 
    { link: '/login', title: 'Login'},
    { link: '/books', title: 'Books'},
    { link: '/authors', title: 'Authors'},
    { link: '/books/add', title: 'Add Books'},
    {link:'/authors/add',title:' Add Authors'}

   ];
const booksRouter   = require("./src/routes/bookRouter")(nav);
const authorsRouter = require("./src/routes/authorRouter")(nav);
const signupRouter  = require("./src/routes/signupRouter")(nav);
const loginRouter   = require("./src/routes/loginRouter")(nav);
//passing nav to booksrouter
app.use(express.static(path.join(__dirname, "/public")));
app.use('/books', booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

mongoose.connect("mongodb://localhost:27017/collegedb")


app.set('views', './src/views');
app.set('view engine', 'ejs');  
app.get("/", function (req, res) {
    res.render('index.ejs',
        {
            nav,
            title: "Library"
        }
    );
    // res.send("I am fine"),title:"Library"}); 
    // res.sendFile(path.join(__dirname,"/src/views/index.html"));
});
app.listen(3700, function () {
    console.log('listening to port' + chalk.yellowBright('3700'));
});

