import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import SingleNasa from './SingleNasa/SingleNasa'
function SingleHomePage({posts,searchTerm,first,second,third,fourth}) {
    
    const ImageForPc =[
      {id: 1, title: first},
      {id: 2, title: second},
      
    ]
    const MobileImageItems= [
      {id: 1, title: third},
      {id: 2, title: fourth},
      
      
    ]

    const isMobileDevice =useMediaQuery({
      query: '(max-device-width: 1300px)'
    })
    const Item= styled.img`
      
    height: 400px;
    width: 100%;
    
    
   `;
    return (
        <div>
          <h3 className="test">
            See Some Nasa's Pictures From Mars taken by 'perseverance' !
          </h3>
          <div style={{zIndex:"200"}}>
            <Carousel itemsToShow={1} >
                  
                  {isMobileDevice ? MobileImageItems.map((item) => (
                      <Item src ={item.title }key={item.id}/>)):
                      ImageForPc.map((item) => (
                    <Item src ={item.title }key={item.id}/>
                  ))}
            </Carousel>
          </div>
          
              <div>
                <h1 className="test">Nasa News</h1>
                {
                posts
                .filter(val=>{
                  if( val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val.title.toLowerCase().includes(searchTerm.toLowerCase())
                    
                  }else{
                    
                  }

                    
                    
                }).map((val) => {
                    return (
                      <SingleNasa val={val} />
                    );
                  })}
              </div> 
              
          </div>
    )
       
}

export default SingleHomePage