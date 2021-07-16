import React from 'react'


function SingleHomePage({posts,searchTerm,first,second,third}) {
    
    
    return (
        <div>
              <div>
                <h1 className="test">Nasa News</h1>
                {
                posts
                .filter(val=>{
                    return val.title.toLowerCase().includes(searchTerm.toLowerCase())
                }).map((val) => {
                    return (
                      <div className="container containero col-xs-3" key={val.date}>
                        <img alt="" className="img-rounded" src={val.url} />
                        <h3 className="">{val.title}</h3>
                        <h5 className="">{val.explanation}</h5>
                        <footer className="date">
                          {val.date} {val.copyright}
                        </footer>
                      </div>
                    );
                  })}
              </div> 
              <h3 className="test">
            See Some Nasa's Pictures From Mars taken by 'perseverance' !
          </h3>
          <div class="container">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <img src={first} alt="Los Angeles" />
                </div>

                <div class="item">
                  <img src={second} alt="Chicago" />
                </div>

                <div class="item">
                  <img src={third} alt="New york" />
                </div>
              </div>
              <a
                class="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          </div>
    )
       
}

export default SingleHomePage