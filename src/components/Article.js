import React from "react";

function MinutesToRead(mins){
    let minEmojis = ""
    if (mins<30){
        let newNum = Math.ceil(mins/5)
            for (let i=0; i<newNum; i++){
                minEmojis += "☕️";
            }
    
    }
    else{
        let newNum = Math.round(mins/10);
            for (let i=0; i<newNum; i++){
                minEmojis += "🍱";
            }
    } 
    return minEmojis;
}

function Article({title, date="January 1, 1970", preview, minutes}){
    let emojiString = MinutesToRead(minutes)
    return(
   <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <small> {emojiString} {minutes} min read</small>
        <p>{preview}</p>
        
    </article>
    )
}

export default Article