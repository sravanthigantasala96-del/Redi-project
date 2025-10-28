import { useState } from "react";
import Color from "./color";

function StateColor(){
    const[index ,setIndex] = useState(0);
    const colors = ['blue','yellow','pink','black','red'];
    //setIndex(colors[Math.floor(Math.random() * colors.length)]);
    return(
        <div><button style={{backgroundColor:colors[index]}} 
        onClick={()=>(
            index < colors.length - 1) ?
            setIndex(index+1):
            setIndex(0)
        }>updatedColor</button></div>
    )
}
export default StateColor;