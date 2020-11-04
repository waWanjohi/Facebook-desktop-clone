import React from 'react';
import "./Widget.css";


function Widget() {
    return (
        <div className="widgets">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=2500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="340" 
                height="500" 
                style={{ border:"none", overFlow:"hidden" }}
                scrolling="no" 
                frameborder="0" 
                allowTransparency="true" 
                allow="encrypted-media" 
                />
        </div>
    )
}

export default Widget
