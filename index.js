const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); 

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
app.post('/',async(req,res)=>{
    try{
        const {title,url,explanation,date,user_email} = req.body
        const addTofav = await pool.query(
            "INSERT INTO user_posts (post_title,post_image,post_description,post_footer,email) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [title,url,explanation,date,user_email]
          );
        res.json(addTofav.rows[0])  

    }catch(err){
        console.log(err.message)

    }
})
app.post('/fav',async(req,res)=>{
    try{
        const {user_email} =  req.body
        const getFav =  await pool.query('SELECT post_id,post_title,post_image,post_description,post_footer FROM user_posts WHERE  email=$1 ',[user_email])
        res.json(getFav.rows)


    }catch(err){
        consle.log(err.message)

    }
})
app.delete("/fav/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM user_posts WHERE post_id = $1", [
        id
      ]);
      console.log('delete ')
      res.status(200).json('wrong credentials')
    } catch (err) {
      console.log(err.message);
    }
  });
app.post('/pass_change',async(req,res)=>{
    try{
        const {currentPass,user_email,new_pass} =  req.body
        const checkCurrentPassword =  await pool.query('SELECT password FROM loginandsign WHERE  email=$1 ',[user_email])
        if(checkCurrentPassword.rows[0].password === currentPass){
            
            
            updatepassword =  await pool.query('update loginandsign set password = $1 where email=$2 returning * ;',[new_pass,user_email])
            res.json(updatepassword.rows[0].password)
            console.log('cbon')
            
        }else{
            res.status(200).json('current password is incorrect')
        }

    }catch(err){

    }
})  
app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
  