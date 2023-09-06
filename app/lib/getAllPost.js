

export const getPosts =async()=>{
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-newest`);
    
    if(!res.ok){
        throw new Error('Error fetching posts');
    }

    return await res.json();
}