import React from "react";
 function Time(){
    const ctime=new Date();
    const date=ctime.toDateString();
    return(<h1>{date}</h1>);
 }
export default Time;