import React,{useState} from 'react'
import './style.css'
function SingleNasa({val}) {
    const{title,url,explanation,date,copyright} =  val
    const Addtofav = async()=>{
        if(localStorage.getItem('status')!=='logged') {
            localStorage.setItem('fromnasa','notconnected')
            window.location = '/login'
            
        }else{
            try{
                const user_email = localStorage.getItem('user_email')
                const body ={title,url,explanation,date,user_email}
                const response = await fetch("http://localhost:5000/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })
                console.log(response)

            }catch(e){
                console.log(e.message)

            }
            
        }
    }
    return (
        <div className="container">

        
            <div className="images-container">
                <div className="card" key={val.date}>
                    <img alt="" className="img-rounded" src={val.url} />
                    <h3 className="card-title" >{val.title}</h3>
                        <h5 className="card-body">{val.explanation}</h5>
                        <div className="footer">
                            <footer className="date">
                                    {val.date} {val.copyright}
                            </footer>
                            <div>
                                <a  title="Love it" class="btn" data-count="0" onClick={Addtofav}><span>&#x2764;</span></a>
                            </div>
                        </div>

                </div>
                
            </div>

        </div>
    )
}

export default SingleNasa

