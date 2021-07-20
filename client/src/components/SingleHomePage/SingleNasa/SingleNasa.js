import React from 'react'
import './style.css'
function SingleNasa({val}) {
    return (
        <div className="container">

        
            <div className="images-container">
                <div className="card" key={val.date}>
                    <img alt="" className="img-rounded" src={val.url} />
                    <h3 className="card-title">{val.title}</h3>
                        <h5 className="card-body">{val.explanation}</h5>
                        <footer className="date">
                                {val.date} {val.copyright}
                        </footer>

                </div>
                
            </div>

        </div>
    )
}

export default SingleNasa

