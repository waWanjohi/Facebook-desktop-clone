import React from 'react';
import Story from '../Story/Story';
import "./StoryReel.css";
function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://images.unsplash.com/photo-1604448554198-8d52258d4f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            profileSrc="ss"
            title="Awesome Samantha"
            />
            <Story
            image="https://images.unsplash.com/photo-1602525662485-744a6e2bf33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            profileSrc="ss"
            title="Awesome ALex"
            />
            <Story
            image="https://images.unsplash.com/photo-1604449499867-b9687931df79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            profileSrc="ss"
            title="Gemuso Kiolo"
            />
            <Story
            image="https://images.unsplash.com/photo-1604446496278-3ed92203f2f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            profileSrc="ss"
            title="Awemba Mwili"
            />
            <Story
            image="https://images.unsplash.com/photo-1604445759020-96c93fa61557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            profileSrc="ss"
            title="Abashwili Natella"
            />
            <Story
            image="https://images.unsplash.com/photo-1604442577090-13e1fd8d0f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            profileSrc="ss"
            title="Job Mbuvi"
            />
        </div>
    )
}

export default StoryReel
