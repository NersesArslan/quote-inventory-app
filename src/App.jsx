import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greeting'
function App() {

  const [formData, setFormData] = useState({
    author: '',
    book: '',
    quote: ''
  });
  
  const [quote, setQuote] = useState([])
  const quoteDisplay = quote.map((quotes) => 

   <div className="quoteBlock">
     <p key={quotes} className="author">{quotes.quote}</p>
     <p className="author">{quotes.author}, {quotes.book}</p>
   </div>
  )
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setQuote(prevState =>([
      ...prevState, 
      formData
    ]))
 
    setFormData({author: '', book: '', quote: ''})
  
  }
console.log(quote);
  return (
    <>
     <form action="">
      <div className='author'>
        <label htmlFor="Author">Author</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange}/>
      </div>
      <div className="book">
        <label htmlFor="">Book</label>
        <input type="text" name="book" value={formData.book} onChange={handleChange}/>
      </div>
      <div className="quote">
        <label htmlFor="">Quote</label>
        <textarea type="text" name="quote" value={formData.quote} onChange={handleChange}></textarea>
      </div>
      <button type="submit" onClick={onSubmit}>Submit</button>
     </form>
     
     <p>{quoteDisplay}</p>
    </>
  )

}
export default App
