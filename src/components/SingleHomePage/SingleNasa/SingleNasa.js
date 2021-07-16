import React from 'react'

function SingleNasa({val}) {
    return (
        <div>
            <div className="container containero col-xs-3" key={val.date}>
                <img alt="" className="img-rounded" src={val.url} />
                <h3 className="">{val.title}</h3>
                 <h5 className="">{val.explanation}</h5>
                <footer className="date">
                          {val.date} {val.copyright}
                </footer>
            </div>
            
        </div>
    )
}

export default SingleNasa
