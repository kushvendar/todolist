// set server such that it give the day of the week

const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/dateexport.ejs");

const app=express();
// body parser used to take 
var list=[];
var flist=[];
app.use(bodyParser.urlencoded({extended:true}));
// linking css via server
app.use(express.static("public"));

app.set('view engine','ejs');

app.get("/",function(req,res){
    // defined a coustom format for date and time
      
 
//   jab render ki request waha par add karne wali koi query nhi thi isliye hum post query ko bhi yhi add kar diya
 
    res.render("date",{current:day,newelement:flist});
    
});

// app.get("/work",function(req,res){
//     res.render("date",{current:"Focus",newelement:flist});
// });

app.post("/",function(req,res){
    // post to the server
    // this line takes text provided by the client 
var element=req.body.newItem;
    // this is giving us the input provided by the client
    flist.push(element);
    res.redirect("/");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen("3000",function(){
    // set the server
    console.log("server is running at 3000");
});