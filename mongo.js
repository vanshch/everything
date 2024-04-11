const mongoose = require('mongoose');

let URI = "mongodb+srv://namankundra:namankundra@cluster0.ekosilc.mongodb.net/userdetails?retryWrites=true&w=majority";

mongoose.connect(URI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
	console.log("Database Connected Successfully");
})

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mobile:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("signup",schema)

module.exports=collection