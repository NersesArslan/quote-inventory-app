import React from "react";


export default function Quote ({quote, keyValue, onClick}) {
   const props = {quote, keyValue, onClick}
   return (
<div className="quoteBlock" key={keyValue}>
     <p  className="author">{quote}</p>
     <p className="author"></p>
     {/* <button onClick={onClick}>Edit</button> */}
   </div>
   )
}