import React, { useContext } from 'react'
import { Contexts } from '../../context/DataContext'
import './Quotes.css'

function Quotes() {

    const { quotes, getQuotes } = useContext(Contexts);

    // console.log(quotes)



    return (
        <section className='quotes-section'>
            <h1 className='quotes-h1'>Quotes</h1>
            <div className='quotes-container'>
                {quotes && quotes.map((quote) => (
                    <div className='quotes' key={quote.sentence}>
                        <h2>{quote.character.name}</h2>
                        <p className='quote-sentence'>{quote.sentence}</p>
                    </div>
                ))}
            </div>
            <div className='quotes-btn'>
                <button type='button' class="btn btn-warning" onClick={() => getQuotes()}>More random quotes</button>
            </div>
        </section>
    )
}

export default Quotes