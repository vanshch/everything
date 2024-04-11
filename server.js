const express = require('express')


const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/login',(req,res) =>{
  res.sendFile(__dirname + '/html/login_page.html')
})
console.log("hello")
app.post('/login',(req,res) => {
  console.log(req.body);
  console.log("hello")
  const username = req.body.username;
  const password = req.body.password;
  if(username ==="vansh@vansh" && password === "vansh"){
    res.json({ success: true, message: 'Login successful' });
  }
  else{
   res.json({ success: false, message: 'Login successful' }); 
  }
})


app.listen(5000,() => {
  console.log("\n localhost:5000/")
})