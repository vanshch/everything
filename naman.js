const express = require('express');
const app = express()
const path = require('path')
const collection = require('./mongo')
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//signup


app.post("/signup", async(req,res)=>{
  const signup = {
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }

  const existingEmail = await collection.findOne({email: signup.email});
  if(existingEmail){
    res.send("User Already Exists. Please use other email");
  }
  else{
    const saltRounds = 9;
    const hashPassword = await bcrypt.hash(signup.password,saltRounds);

    signup.password=hashPassword;

    const userdata = await collection.insertMany(signup);
    console.log(userdata);

  }
  
}) 


//login

app.post("/login", async (req,res)=>{
  try{
    const check = await collection.findOne({email: req.body.email});
    if(!check){
      res.send("User not found. Please SignUp!");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if(isPasswordMatch){
      res.render("home");
    }
    else{
      req.send("wrong password");
    }
  }
  catch{
    res.send("wrong details");
  }
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});