import React, { useEffect, useState } from 'react';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../post/Post';
import StoryReel from '../storyreel/StoryReel';
import "./Feed.css";
import db from "../../firebase";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()  })))
        );
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>

            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    username={post.data.username}
                    image={post.data.image}
                    timestamp={post.data.timestamp}
                />
            ))}            
        </div>
    )
}

export default Feed
