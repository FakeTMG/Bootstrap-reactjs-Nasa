import React,{useState} from 'react'
import NasaNav from './Nav'
function ChangePass() {
    const [currentPass,SetcurrentPass] = useState('')
    const [new_pass,Setnew_pass] = useState('')
    const user_email = localStorage.getItem('user_email')
    const changePass = async (e)=>{
        e.preventDefault();
        console.log(currentPass)
        console.log(new_pass)
        
        if(currentPass === ''  || new_pass === ''){
            document.getElementById('text').textContent = 'current pass and new pass are required'
            document.getElementById('text').style.color = "red"
            document.getElementById('text').style.fontSize = "15px"
        }else{
            if(currentPass === new_pass){
                document.getElementById('text').textContent = 'current pass and new pass must not be the same'
                document.getElementById('text').style.color = "red"
                document.getElementById('text').style.fontSize = "15px"
            }else{
                try {
                    const body = { currentPass,new_pass,user_email };
                    const response = await fetch("http://localhost:5000/pass_change", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(body)
                    })
                    const jsonData = await response.json();
                    if(jsonData === new_pass){
                        document.getElementById('text').textContent ='password have been changed '
                        document.getElementById('text').style.color = "green"
                        document.getElementById('text').style.fontSize = "15px"
                        window.location = '/'

                    }else{
                        document.getElementById('text').textContent = 'current password is incorrect'
                        document.getElementById('text').style.color = "red"
                        document.getElementById('text').style.fontSize = "15px"
                    }
                   
                  } catch (err) {
                     console.error(err.message);
                     
                  }
            }
        }

    }
    return (
        <div>
            <NasaNav />
            
            <div className="container">
            <h3>Change password</h3>
            <p id='text'>enter your current password</p>
                <form>
                    <div class="input-group">
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            name="password"
                            value={currentPass}
                            onChange={e => SetcurrentPass(e.target.value)}
                            
                            placeholder="current password"
                        />
                        <span class="input-group-addon">
                            <i class="glyphicon glyphicon-lock"></i>
                        </span>
                    </div>
                    <div class="input-group">
                        <input
                            id="password_change"
                            type="password"
                            class="form-control"
                            name="password2"
                            value={new_pass}
                            onChange={e =>Setnew_pass(e.target.value)}
                            placeholder="new password"
                        />
                        <span class="input-group-addon">
                            <i class="glyphicon glyphicon-lock"></i>
                        </span>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={changePass}  style={{marginTop: "15px"}}>Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default ChangePass
