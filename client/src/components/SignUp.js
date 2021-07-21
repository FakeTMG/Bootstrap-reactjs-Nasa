import React, { useState } from 'react'
import NasaNav from "./Nav";
function SignUp() {
    const [sign_email,Setsign_email] = useState('')
    const [sign_password,Setsign_password] = useState('')
    const [sign_msg,Setsign_msg] =  useState('')
    const [sucessmessage,setSucessmessage] = useState(false)
    const [failuremessage,Setfailuremessage] = useState(false)
    const SucessMessage = ()=>{
      
        return(
            <div style={{backgroundColor :"#00FF00",marginBottom:"15px",borderRadius :"4px"}}><h4 style={{padding: "10px"}}>Sign up sucessfully</h4></div>
        )
    }
    const FailureMessage = ()=>{
        return(
           <div style={{backgroundColor :"#F32013",marginBottom:"15px",borderRadius :"4px"}}> <h4 style={{padding: "10px"}}>Use another email (email and password are necessary)</h4> </div>
        )
    }
    const submitSignup = async e => {
        e.preventDefault();
        try {
          const body = { sign_email,sign_password,sign_msg };
          const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          console.log(response)
          if(response.ok){
              console.log('signup sucessfully')
              Setfailuremessage(false)
              setSucessmessage(true)
              window.location =  '/login'

          }else{
              console.log('failure')
              setSucessmessage(false)
              Setfailuremessage(true)
    
         
            }
        } catch (err) {
          console.error(err.message);
        }
    
    }
    return (
      <div>
        <NasaNav />
        <div className='container'><p>Register</p>
        {sucessmessage ? <SucessMessage /> : ''}
        {failuremessage ? <FailureMessage /> : ''}

        <form>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              id="email"
              type="text"
              class="form-control"
              name="email"
              placeholder="Email"
              value={sign_email}
              onChange={e => Setsign_email(e.target.value)}
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-lock"></i>
            </span>
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              onChange={e => Setsign_password(e.target.value)}
              value={sign_password}
            />
          </div>
          <br />
          <div class="input-group">
            <span class="input-group-addon">Text</span>
            <input
              id="msg"
              type="text"
              class="form-control"
              name="msg"
              placeholder="Additional Info"
              onChange={e => Setsign_msg(e.target.value)}
              value={sign_msg}
              
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={submitSignup} style={{marginTop: "15px"}}>Submit</button>
        </form>
            
        </div>
      </div>  
    )
}

export default SignUp
