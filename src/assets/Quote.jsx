import React from "react";
import { useState } from 'react'

export default function Quote ({quote, author, book, keyValue, onClick}) {
   const props = {quote, author, book, keyValue, onClick}
   const showQuoteIDValue = () => {
      setQuoteText("")
   }
   return (
<div className="quoteBlock" id={keyValue}>
     <p  className="quote">{quote}</p>
     <p className="author">{author}, {book}</p>
     <button onClick={showQuoteIDValue}>Edit</button>
   </div>
   )
}