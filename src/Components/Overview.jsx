import { useEffect, useState } from "react";
import { getPosts, getImgs } from "../serivces/contentCall";
import PostCard from "./PostCard";
import Slideshow from "./Slideshow";

export default function Overview() {
    const [posts, setPosts] = useState([])
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            try {
                const blogposts = await getPosts();
                setPosts(blogposts)
            }catch(err){
                console.log("Error fetching posts", err)
            }
        }
         async function fetchImgs() {
						try {
							const imgs = await getImgs();
							setImgs(imgs);
						} catch (err) {
							console.log("Error fetching posts", err);
						}
					}
        fetchPosts()
    }, [])

    console.log(posts)

    return (
        <>
        <Slideshow posts={posts} imgs={imgs}/>

        </>
    )
}