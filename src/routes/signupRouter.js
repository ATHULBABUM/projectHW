var express=require("express")
var signupRouter=express.Router()
function router(nav){
signupRouter.route('/')
    .get((req, res) => {
        res.render(
            'signup',
            {   nav,
                title: "Signup",                
            }
        );
    });
    signupRouter.route('/save')
    .post((req, res) => {
        console.log(req.body);
    }
    );
 return signupRouter;
    }
     module.exports=router;