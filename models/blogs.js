var mongoose=require("mongoose"),
     passportlm=require("passport-local-mongoose");
     
var blogSchema=new mongoose.Schema({
    title:String,
    image:String,
    desc:String,
    date:{type:Date,default:Date.now},
    author:
    {
         id:
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
         },
         username:String
    }
});

blogSchema.plugin(passportlm);

module.exports=mongoose.model("blog", blogSchema);