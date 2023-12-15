import React, { useContext } from 'react'
import { Contexts } from '../../context/DataContext'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './Characters.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Characters() {

  const { characters, getCharacterQuote, characterQuote } = useContext(Contexts)
  const [open, setOpen] = useState(false);

  // console.log(characters)
  // console.log(open)

  return (
    <section className='characters-section container'>
      <h1 className='characters-h1'>All Characters</h1>
      <div className='characters-container'>
        {characters && characters.map((chars) => (
          <div onClick={() => setOpen(true)} 
            aria-controls="example-collapse-text"
            aria-expanded={open} className='characters' key={chars.name} >
            <img onClick={() => getCharacterQuote(chars.slug)} className='char-img' src={`./img/characters/${chars.slug}.jpg`} alt="" />
            <p className='chars-name'>{chars.name}</p>
            <div  style={{ minHeight: '' }}>
              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Card  style={{ width: '200px', position: 'absolute', top: '0', lef: '-10000px', zIndex: '100', display: `${characterQuote?.character?.slug === chars.slug ? 'block' : 'none'}`}}>
                    <p className='char-sentence'>{characterQuote?.sentence}</p>
                  </Card>
                </div>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Characters