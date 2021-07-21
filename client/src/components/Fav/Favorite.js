import React, { useEffect,useState } from 'react'
import NasaNav from "../Nav";
import SinglePost from './singlePost/SinglePost';
function Favorite() {
    const [post,setpost] =  useState([])
    const UserIsHere =  ()=>{
        useEffect(()=>{
            getFav()

        },[])
        return(
            <div class="leftcolumn">
                {
                    post.map((val) => {
                        return (
                            <SinglePost val={val} />
                        );
                    })}
            
                    
                    
            </div>  
        )
    }
    const getFav = async()=>{
        try{
            const user_email = localStorage.getItem('user_email')
            const body = {user_email}
            const response = await fetch("http://localhost:5000/fav", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            const jsonData = await response.json();
            setpost(jsonData)

            
        }catch(e){
            console.error(e.message)

        }
    }
    
    
    return (
        <div>
            <NasaNav />
            {
                localStorage.getItem('status')==='logged' ? <UserIsHere /> : <div class='container'><h2>you have to log in to acess this page</h2></div>
            }
            
        </div>
    )
}

export default Favorite
