import { Chip, makeStyles } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import React from 'react';
import "./Widget.css";


function Widget() {

    const handleDelete = () => {
        let answers = [
            "Hi",
            "I made this",
            "Oh, you clicked again",
            "Nope!",
            "Hehehehe",
            "I'm going nowhere ^_^",
        ];
    
    const random = answers[Math.floor(Math.random() * answers.length)];

        alert(random);
    };

    return (
        <div className="widgets">
            <Chip
                className="copyright"
                icon={<FaceIcon />}
                label=" Facebook clone by Gideon"
                onDelete={handleDelete}
                color="secondary"
            />
        </div>
    )
}

export default Widget
