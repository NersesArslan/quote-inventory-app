import React from "react";
import { useState } from 'react'
import './quote.css'
export default function Quote ({quote, author, book, keyValue, onClick }) {
   const props = {quote, author, book, keyValue, onClick}
   const [isEditing, setIsEditing] = useState(false);
   const [Text, setText] = useState(quote);

   const handleEditClick = () => {
      setIsEditing(true);
    };
    const handleSaveClick = () => {
      setIsEditing(false);
  };
  
  const handleChange = (e) => {
    setText(e.target.value)
  };

   return (

<div className="quoteBlock">
      {isEditing ? (
        <div>
          <form action="">
            <textarea type="text" name="" onChange={handleChange} id="" value={Text}/>
          </form>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
     <div id={keyValue}>
        <p  className="quote">{Text}</p>
        <p className="author">{author}, {book}</p>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={onClick}>Delete</button>
     </div>
      )}
    
   </div>
   )
}