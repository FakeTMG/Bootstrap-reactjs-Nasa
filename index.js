const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body

app.post('/signup',async(req,res)=>{
    try{
        const {sign_email,sign_password,sign_msg} = req.body
        if(sign_email === '' || sign_password === ""){
            res.status(400).json('email and password are required')
        }
        const checkForEmail = await pool.query('SELECT * FROM loginandsign WHERE  email=$1',[sign_email])
        if(checkForEmail.rows.length > 0){
            res.status(400).json('wrong credentials')
        }else{
            const newUser = await pool.query(
                "INSERT INTO loginandsign (email,password,description) VALUES($1,$2,$3) RETURNING *",
                [sign_email,sign_password,sign_msg]
              );
            res.json(newUser.rows[0])  

        }
       
        

    }catch(e){
        console.log(e)
    }

})
app.post('/login',async(req,res)=>{
    try{
        const {login_email,login_password} = req.body
        if(login_email === '' || login_password === ""){
            res.status(400).json('email and password are required')
        }
        
        const checkUser= await pool.query('SELECT * FROM loginandsign WHERE  email=$1 AND password=$2 ',[login_email,login_password])
       
        if(checkUser.rows.length > 0){
            res.json(checkUser.rows[0])
        }else{
            res.status(400).json('wrong credentials')
        }

    }
    catch(err){
        res.json(err.message)

    }
    
    
   
})
app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
  