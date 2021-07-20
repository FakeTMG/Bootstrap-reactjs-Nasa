const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body

app.post('/login',async(req,res)=>{
    try{
        const {email,password,msg} = req.body
        const newUser = await pool.query(
            "INSERT INTO loginandsign (email,password,description) VALUES($1,$2,$3) RETURNING *",
            [email,password,msg]
          );
        res.json(newUser.rows[0])  

    }catch(e){
        console.log(e)
    }

})
app.get('/login',async(req,res)=>{
    try{
        const {email,password} = req.body
        
        const checkUser= await pool.query('SELECT * FROM loginandsign WHERE  email=$1 AND password=$2 ',[email,password])
       
        if(checkUser.rowCount !== 0){
            res.json(checkUser.rows[0])
        }else{
            res.json('wrong credentials')
        }

    }
    catch(err){
        res.json(err.message)

    }
    
    
   
})
app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
  