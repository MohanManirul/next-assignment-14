"use client"

import { useEffect, useState } from 'react';
import { getPosts } from './lib/getAllPost';
import { setCookie } from './lib/setCookie';
import { getCookie } from './lib/getCookie';


export default function Home() {
    const [cookie , myCookie] = useState('');
    console.log(cookie);
    const handleSetCookie = () => {
        setCookie()
    }
    const handleGetCookie = () => {
        let datagetCookie = getCookie().then((res)=>{
            myCookie(res)
        })
    }


    const [posts , setPosts] = useState([]);
    useEffect(()=>{

            let data = getPosts().then((res)=>{
                setPosts(res)
            })


    },[])


  return (
    <>
            <div className="row">
            <button className="btn btn-success" onClick={handleSetCookie}>SetCookie</button> <hr/>
            <button className="btn btn-success" onClick={handleGetCookie}>getCookie</button>
            </div>
            <div className="row">
               <p>cookie</p>
            </div>
        <div className="row">
            <b className="text-center">Blog List</b>
                {
                    posts?.map((item,index)=>{
                        return(
                            <div key={index} className="card cardPadding col-md-4">
                                
                                <figure><img className="imgWidth"  src={item['img']} /></figure> 
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item['short']}</p>
                                </div> 
                                                       
                            </div> 
                        )
                    }) 
                }
            </div> 

            
    </>
        
  );
}
