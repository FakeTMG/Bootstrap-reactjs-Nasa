import React,{useState} from 'react'
import NasaNav from "./Nav";
function Login() {
  const [login_email,Setlogin_email] = useState('')
  const [login_password,Setlogin_password] = useState('')
  const [sucessmessage,setSucessmessage] = useState(false)
  const [failuremessage,Setfailuremessage] = useState(false)
  
  const SucessMessage = ()=>{
    return(
        <div style={{backgroundColor :"#00FF00",marginBottom:"15px",borderRadius :"4px"}}><h4 style={{padding: "10px"}}>Login sucessfully</h4></div>
    )
  }
  const FailureMessage = ()=>{
      return(
        <div style={{backgroundColor :"#F32013",marginBottom:"15px",borderRadius :"4px"}}> <h4 style={{padding: "10px"}}> Wrong email/password (email,password are required ) </h4> </div>
      )
  }
  const Notconnected = ()=>{
    setTimeout(function(){ 
      document.getElementById("myDIV").style.display = "none";  
      localStorage.removeItem('fromnasa')
    }, 3000);
    return(
      <div id="myDIV" style={{backgroundColor :"#ff7f00",marginBottom:"15px",borderRadius :"4px"}}> <h4 style={{padding: "10px"}}> You need to connect to add your fav posts </h4> </div>
    )
}
  const submitLogin = async e => {
        e.preventDefault();
        try {
          const body = { login_email,login_password };
          const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          })
          
          if(response.ok){
              console.log('login sucessfully')
              Setfailuremessage(false)
              setSucessmessage(true)
              // Setloggedin(true)
              localStorage.setItem('status','logged')
              localStorage.setItem('user_email',login_email)
              window.location =  '/'
              
              

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
        <div class="container" >
          <h3>Login</h3>
          <p>Please enter your email / password as explained.</p>
          
          
          

          <p>Login</p>
          {localStorage.getItem('fromnasa')==='notconnected' ? <Notconnected /> : ''}
          {sucessmessage ? <SucessMessage /> : ''}
          {failuremessage ? <FailureMessage /> : ''}
          <form>
            <div class="input-group">
              <input
                id="email"
                type="text"
                class="form-control"
                name="email"
                value={login_email}
                onChange={e => Setlogin_email(e.target.value)}
                placeholder="Email"
              />
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
            </div>
            <div class="input-group">
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                value={login_password}
                onChange={e => Setlogin_password(e.target.value)}
                placeholder="Password"
              />
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-lock"></i>
              </span>
            </div>
            <button type="submit" class="btn btn-primary" onClick={submitLogin} style={{marginTop: "15px"}}>Submit</button>
          </form>
        </div>
      </div>
      
    
  )
}

export default Login



