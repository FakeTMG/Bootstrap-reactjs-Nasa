import React, { useEffect,useState } from 'react'
import SinglePost from './singlePost/SinglePost'
function Userhere() {
    const [post,setpost] =  useState([])
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
            console.log(post)

            
        }catch(e){
            console.error(e.message)

        }
    }
    const delete_post = async id => {
        try {
            console.log('func work')
          const deleteTodo = await fetch(`http://localhost:5000/fav/${id}`, {
            method: "DELETE"
          });
          console.log(deleteTodo)
    
          setpost(post.filter(sigpost => sigpost.post_id !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    
    useEffect(()=>{
        getFav()

    },[])
    return (
        <div className="container">
            { post.length === 0 ? <h2>please add your fav posts</h2> : 
                    post.map((val) => {
                        return (
                          <SinglePost val={val} delete_post={() =>delete_post(val.post_id)} />
                        );
            })}
            
            
        </div>
    )
}

export default Userhere
