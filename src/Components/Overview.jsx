import { useEffect, useState } from "react";
import { getPosts } from "../serivces/contentCall";
import PostCard from "./PostCard";
import Slideshow from "./Slideshow";

export default function Overview() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            try {
                const blogposts = await getPosts();
                setPosts(blogposts)
            }catch(err){
                console.log("Error fetching posts", err)
            }
        }
        fetchPosts()
    }, [])

    console.log(posts)

    return (
        <>
        <Slideshow posts={posts}/>

        </>
    )
}