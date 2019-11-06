var   mongoose=require("mongoose"),
      passportlm=require("passport-local-mongoose");
      
      
var UserSchema=new mongoose.Schema({
     username:String,
     password:String
});

UserSchema.plugin(passportlm);

module.exports=mongoose.model("User", UserSchema);