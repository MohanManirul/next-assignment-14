"use client"
import Link from "next/link";
import getAllPost, { getPosts } from "../lib/getAllPost"
import { useEffect, useState } from "react";


export default  function Blog(){
 
    const [posts , setPosts] = useState([]);
    useEffect(()=>{

            let data = getPosts().then((res)=>{
                setPosts(res)
            })


    },[])

    
    return(
        <div className="blogContent">
            <section>
                <h2 className="text-center">Blog posts</h2>
                <div className="row mt-4">
                    {
                      posts?.map((post,index) =>
                        (                           
                            <div className="card cardPadding col-md-4">
                            <Link key={index} href={`/blog/${post.id}`}>
                                <figure><img className="imgWidth"  src={post['img']} /></figure> 
                                <div className="card-body">
                                    <h2 className="card-title">{post.title}</h2>
                                    <p>{post['short']}</p>
                                </div> 
                            </Link>                   
                            </div>                          
                                                    
                        )
                    )  
                    }
                </div>
            </section>
        </div>
    )
}