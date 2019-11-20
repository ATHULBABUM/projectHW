var express=require("express")
var loginRouter=express.Router()
function router(nav){
loginRouter.route('/')
    .get((req, res) => {
        res.render(
            'login',
            {   nav,
                title: "Login",               
            }
        );
    });
    loginRouter.route('/save')
    .post((req, res) => {
        console.log(req.body);
    }
    );

 return loginRouter;
    }
     module.exports=router;