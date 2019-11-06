var express=require("express");
var routes=express.Router();
var  passport=require("passport");
var User=require("../models/user");
var blog=require("../models/blogs");

//root route
routes.get("/",function(req,res)
{
    res.redirect("/blog");
});


//index route
routes.get("/blog",function(req,res)
{
    blog.find({},function(error,blog)
    {
        if(error)
        {
            console.log("error");
        }else
        {
             res.render("home",{blog:blog});
        }
    });
   
});


//new route
routes.get("/blog/new",function(req,res)
{
    res.render("creating");
});


//create route
routes.post("/blog",function(req,res)
{
    req.body.blog.desc=req.sanitize(req.body.blog.desc);
    console.log(req.body.blog);
    req.body.blog.author.username=req.user.username;
    req.body.blog.author.id=req.user._id;
    console.log(req.body.blog);
    blog.create(req.body.blog,function(error,newb)
    {
        if(error)
        {
           res.send("404-Error") ;
        }else
        {
         res.redirect("/blog");
        }
    });
}
);


//show route
routes.get("/blog/:id",function(req,res)
{
    blog.findById(req.params.id,function(error,blog)
    {
        if(error)
        {
           res.send("404-ERROR") ;
        }else
        {
            res.render("display",{blog:blog});
        }
    })
    
});


//edit route
routes.get("/blog/:id/edit",function(req,res)
{
    blog.findById(req.params.id,function(error,blog)
    {
        if(error)
        {
           res.send("404-ERROR") ;
        }else
        {
            res.render("creating_2",{blog:blog});
        }
    })
});


//update route
routes.put("/blog/:id",function(req,res)
{
    req.body.blog.desc=req.sanitize( req.body.blog.desc);
    blog.findByIdAndUpdate(req.params.id,req.body.blog,function(error,blog)
    {
        if(error)
        {
            res.send("404-error");
        }else
        {
            res.redirect("/blog/"+req.params.id);
        }
    });
    
});


//delete route
routes.delete("/blog/:id",function(req,res)
{
    blog.findByIdAndRemove(req.params.id,function(error)
    {
        if(error)
        {
           res.send("404-ERROR");
        }else
        {
             res.redirect("/blog");
        }
    });
});

function isLoggedIn(req,res,next)
{
     if(req.isAuthenticated())
     {
          return next();
     }
     res.redirect("/login");
}
module.exports=routes;
