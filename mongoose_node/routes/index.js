var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var app= express();
const req = require('express/lib/request');;
const { urlencoded } = require('express');
app.use(urlencoded);
// const user = require('./modules/user_info')
// const mongoose = require('mongoose');
/* GET home page. */
app.set('view engine','ejs');
const Schema= mongoose.Schema;
const user_info_Schema=new Schema({
    name:{type: String, unique: true},
    password:{type: String, unique: true},
    phone:{type: String, unique: true},
    email:{type: String, unique: true},

});
console.log()
var user=mongoose.model("user",user_info_Schema);
router.get('/', function(req, res) {
res.render('profile');
res.end();

});
router.get('/home', function(req, res) {
  res.write('profile');
  res.end();
  
  });
mongoose.connect("mongodb://localhost:27017/prof")
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.log(error);
});
router.post("/add_info",auth,(req,res)=>{
  // const user_row = new user({
    const user_instance=new user({
    name:req.body.fullName,
    // password:"lkdjslei",
    // phone:"7829383",
    // img:"lskjslf",
    email:req.body.email
  });
  user_instance.save();
  res.send(req.body.fullName);
  console.log(req.body.fullName);
  res.end();
  
});

console.log("start");

function auth(req,res,next){
next();
}
module.exports = router;
