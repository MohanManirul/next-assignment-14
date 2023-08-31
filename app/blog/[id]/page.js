"use client"
import getSinglePost from "@/app/lib/getSinglePost";
import { useEffect, useState } from "react";

export default function SingleBlog({ params }) {
  const id = params.id;
 

  //request in parallel
  // const [post,comments] = await Promise.all([postPromise,commentsPromise]);


  const [list , setList] = useState(null);
  useEffect(()=> {
      (async()=> {
        const post = await getSinglePost(id);
    
          setList(post.postDetails);
      })()
  },[id])

  return (
    <div className="row blogContent">
    
        <h2>{list?.title}</h2>
        <figure><img className="imgWidth"  src={list?.['img']} /></figure>
        <p>{list?.content}</p>
     
    </div>
  );
}
