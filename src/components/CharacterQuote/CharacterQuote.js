import React, { useContext } from 'react'
import { Contexts } from '../../context/DataContext'
import './CharacterQuote.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function CharacterQuote() {

  const { characterQuote } = useContext(Contexts)
  

  // console.log(characterQuote && characterQuote)

  return (
    <section className={`${characterQuote === undefined ? 'quote-section-hidden' : 'quote-section'}`}>
      <div className='quote-container'>
        <div class="card mb-3" style={{width: '540px'}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img class="img-fluid rounded-start" src={`./img/characters/${characterQuote?.character?.slug}.jpg`} alt='img-notfound'/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{characterQuote?.character?.name}</h5>
                <p class="card-text">{characterQuote?.sentence}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <img src={`./img/characters/${characterQuote?.character?.slug}.jpg`} alt='' />
        </div>
        <div>
          <h3>{characterQuote?.character?.name}</h3>
          <p>{characterQuote?.sentence}</p>
        </div> */}
      </div>
    </section>
  )
}

export default CharacterQuote