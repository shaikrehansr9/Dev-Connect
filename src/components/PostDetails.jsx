
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
   
import Card from "../components/Card";

function PostDetails(){

    const {id}=useParams();

    const [post,setPost]=useState(null);
    useEffect(()=>{
        const fetchpost = async()=>{
            const res=await fetch(`https://dev.to/api/articles/${id}`);
            const data=await res.json();
            setPost(data);
        };
        fetchpost();
    },[id]);
    if(!post) return <div className="p-6 text-center">Loading..</div>
    return(
        <div>
            <Card post={post}/>
        </div>


    );


}
export default PostDetails;