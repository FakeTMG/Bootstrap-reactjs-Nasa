import React, { useEffect,useState } from 'react'
import NasaNav from "../Nav";
import Userhere from './Userhere'
const  Favorite = () => {
    
    
    
    
    
    
   
    
    
    return (
        <div>
            <NasaNav />
            {
                localStorage.getItem('status')==='logged' ? <Userhere /> : <div class='container'><h2>you have to log in to acess this page</h2></div>
            }
            
        </div>
    )
}

export default Favorite
