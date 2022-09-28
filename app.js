const mongoose = require('mongoose')
const User = require('./modals/s_user')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  


const dbURL = 'mongodb+srv://gaurav:gaurav@cluster0.qcdg3t5.mongodb.net/users'
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log(",  __ __ __ __  [MON..]=>   +++connected+++"))
.catch((err) => console.log("error => " + err))


// functions 
function creat_db(email){
    const user = new User({
        email: email,
        age:'16'
    })
    user.save().then((result) => console.log("data saved"))
    .catch((err) => console.log("error => " + err))
}

function load_db(){
    User.find({}).then((result) => console.log(result)) //.then() is used to console log the data
} // '.find({email:"test@test.com"})' --> if it do not exist it will return '[]' otherwise DATA

readline.question(`What'your want to do => [save --> 's'] or [load --> 'l']`, opt => {
    if(opt == "s"){readline.question(`email =>`, opt => {creat_db(opt)})}
    else if(opt == "l"){load_db()}
});
 