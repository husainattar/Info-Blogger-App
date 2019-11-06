var express=require("express");
var routes=express.Router();
var  passport=require("passport");
var User=require("../models/user");
//routes set up
/*routes.get("/",function(req,res)
{
     res.render("home");
});*/

routes.get("/register",function(req,res)
{
     res.render("register");
});

routes.post("/register",function(req,res)
{
     User.register(new User({username:req.body.username}),req.body.password,function(error,user)
     {
          if(error)
          {
               console.log(error);
               return res.redirect("/");
          }
          passport.authenticate("local")(req,res,function()
          {
               res.redirect("/blog");
          });
     });
     
});

routes.get("/login",function(req,res)
{
   res.render("login");  
});

routes.post("/login",passport.authenticate("local",{
     failureRedirect:"/"
}),
function(req,res)
{
     res.redirect("/blog");
});

routes.get("/logout",function(req,res)
{
     req.logout();
     res.redirect("/");
});



/*routes.get("/secret",isLoggedIn,function(req,res)
{
         res.render("secret");
});*/

//middleware
function isLoggedIn(req,res,next)
{
     if(req.isAuthenticated())
     {
          return next();
     }
     res.redirect("/login");
}

module.exports=routes;
