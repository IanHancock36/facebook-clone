import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className = "widgets">
           <iframe title="denali" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FDenaliNPS%2Fposts%2F4790918527599895&width=500&show_text=false&height=495&appId"
           height="100%"
           width ="340"
           style = {{border:"none",overflow:"hidden"}}
           scrolling="no"
           allowTransparency="true"
           allow = "encrypted-media"

           >
               
           </iframe>
        
    </div>
    )
}

export default Widgets;
