import React from 'react'
import './singlePost.css'
function SinglePost({val,delete_post}) {
    
    
    
    
    return (
        
        
        <div className="container">

        
            <div className="images-container">
                <div className="card" key={val.post_footer}>
                    <img alt="" className="img-rounded" src={val.post_image} />
                    <h3 className="card-title" >{val.post_title}</h3>
                        <p className="card-body">{val.post_description}</p>
                        <div className="footer">
                            <footer className="date">
                                    {val.post_footer} 
                            </footer>
                            
                            <i class="fa fa-trash-o" style={{fontSize:"48px",color:"red",cursor:"pointer"}}  onClick={delete_post} ></i>
                            
                        
                            
                        </div>

                </div>
                
            </div>

        </div>
            
        
    )
}

export default SinglePost
