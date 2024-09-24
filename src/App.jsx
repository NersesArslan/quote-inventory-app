import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Quote from './assets/Quote'

function App() {

  const [formData, setFormData] = useState({
    author: '',
    book: '',
    quote: ''
  });

  const [quote, setQuote] = useState([{
    author: 'W. G. Sebald',
    book: 'Austerlitz',
    quote: 'No sooner did I become acquainted with someone than I feared I had come too close, no sooner did someone turn towards me than I began to retreat. In the end I was linked to other people only by certain forms of courtesy which I took to extremes and which I know today, said Austerliz, I observed not so much for the sake of their recipients as because they allowed me to ignore the fact that my life has always, for as far back as I can remember, been clouded by an unrelieved despair.'
  },{
    author: 'Gabriel Garcia Marquez',
    book: 'One Hundred Years of Solitude',
    quote: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.'
  },{
    author: 'Franz Kafka',
    book: 'The Metamorphosis',
    quote: 'One morning, as Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.'
  }])

 const [quoteID, seQuoteID] = useState([
  quote.map
 ])
  const quoteDisplay = quote.map((quotes, index) => 

   <Quote quote={quotes.quote} author={quotes.author} book={quotes.book} keyValue={index} onClick={() => handleDelete(index)} />
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDelete = (index) => {
    const newQuote = [...quote]
    newQuote.splice(index, 1)
    setQuote(newQuote)
  }
  
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
