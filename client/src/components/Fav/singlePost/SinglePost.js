import React from 'react'
import './singlePost.css'
function SinglePost({val}) {
    const{post_id,post_title,post_description,post_image,post_footer} =  val
    
    return (
        
        
        <div className="container">

        
            <div className="images-container">
                <div className="card" key={val.post_footer}>
                    <img alt="" className="img-rounded" src={val.post_image} />
                    <h3 className="card-title" >{val.post_title}</h3>
                        <h5 className="card-body">{val.post_description}</h5>
                        <div className="footer">
                            <footer className="date">
                                    {val.post_footer} 
                            </footer>
                            
                            
                        </div>

                </div>
                
            </div>

        </div>
            
        
    )
}

export default SinglePost
