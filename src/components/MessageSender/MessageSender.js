import { Avatar } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import  PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import React, { useState } from 'react';
import { useStateValue } from '../../StateProvider';
import "./MessageSender.css";
import db from '../../firebase';
import firebase from 'firebase';


function MessageSender() {

    const [input, setInput] = useState();
    const [imageUrl, setImageUrl] = useState("");

    const [{user}, dispatch] = useStateValue("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Some db actions
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        // Clear the fields after submit
        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                        className="messageSender__input" 
                        placeholder={`What's on your mind ${user.displayName}?`} 
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        />
                    <input 
                        className="messageSender__input" 
                        placeholder="Image URL (Optional)" 
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        />
                    <button onClick={handleSubmit} type="Submit" >Hidden Submit</button>                

                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
