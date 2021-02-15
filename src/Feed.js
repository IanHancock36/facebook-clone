import React , {useState} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender';
import Post from './Post'; 
import db from "./firebase";


function Feed() {
const [post,setPosts] = useState([]); 



    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender /> 
            <Post 
            profilePic = 'https://images.unsplash.com/photo-1510992107199-e5224f959d6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60'
            message = 'WOW'
            timestamp ='timestamp this is one'
            username ='@northroadian'
            image = 'https://images.unsplash.com/photo-1582002834723-2256d33da100?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60'

            /> 
            <Post message = 'Cool'
            timestamp ='timestamp this is one'
            username ='@ianisawolf'/> 
            <Post /> 
        </div>
    )
}

export default Feed;
