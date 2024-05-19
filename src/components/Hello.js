// App.js
import React, { useState } from 'react';

function Hello() {
    const [click,setClick] =useState(0);
 
    return(
        <div>
            <p>
                you clicked {click} times
            </p>
            <button onClick={()=>setClick(click+1)}>Clicke me</button>
            <button onClick={()=>setClick(click-1)}>Minus</button>
        </div>
    );
}
  

export default Hello;
