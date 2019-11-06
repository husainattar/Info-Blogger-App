var express=require("express"),
    app=express(),
    mongoose=require("mongoose"),
    bodyparser=require("body-parser"),
    methodOver=require("method-override"),
    passport=require("passport"),
    localStrategy=require("passport-local"),
    passportlm=require("passport-local-mongoose"),
    User=require("./models/user"),
    blog=require("./models/blogs"),
    blogRoutes=require("./routes/blogs"),
    userRoutes=require("./routes/user"),
    expressSanitizer=require("express-sanitizer");

//APP CONFIGRATION/SETUP
mongoose.connect("mongodb://localhost/blog_app");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set("view engine","ejs");
app.use(methodOver("_method"));

//Configuring App autho & authen
app.use(require("express-session")({
     secret:"i am best",
     resave:false,
     saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new  localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//declaring a middleware for variable.
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
});



app.use(userRoutes);
app.use(blogRoutes);


//app listening
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("blog app started"); 
});