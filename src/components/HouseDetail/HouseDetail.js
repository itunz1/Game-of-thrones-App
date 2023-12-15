import React, { useContext, useState } from 'react'
import { Contexts } from '../../context/DataContext'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './HouseDetail.css'

function HouseDetail() {

    const { houseDetail, getCharacterQuote, characterQuote } = useContext(Contexts)
    const [open, setOpen] = useState(false);

    // console.log(houseDetail && houseDetail[0].members.length)

    return (
        <section className={`${houseDetail === undefined ? 'houseDetail-section-hidden' : "houseDetail-section"}`}>
            {houseDetail && houseDetail.map((house) => (
                <div key={house.slug}>
                    <div>
                        <h1 className='houseDetail-h1'>Houses Characters</h1>
                    </div>
                            <h2 className='houseDetail-h3'>{house.name}</h2>
                    <div className='house-detail'>
                        <img className='houseDetailEmblem' src={`./img/${house.slug}.png`} alt='houseImg' />
                        <div className='card-center'>
                            <div className={houseDetail[0]?.members.length < 2 ? "houseDetail-1" : "houseDetail" }>
                                {house.members.map((members) => (
                                    <div className='house-chars-detail' key={members.slug}
                                        onClick={() => setOpen(true)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                        <img onClick={() => getCharacterQuote(members.slug)} className='houseDetailImg' src={`./img/characters/${members.slug}.jpg`} alt='img not found' />
                                        <p className='chars-name'>{members.name}</p>
                                        <Collapse in={open} style={{fontSize: '15px', position: 'absolute', top: '100%', zIndex: '100', backgroundColor: "white", display: `${characterQuote?.character?.slug === members.slug ? 'block' : 'none'}`}}>
                                            <div id="example-collapse-text" >
                                                {characterQuote?.sentence}
                                            </div>
                                        </Collapse>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default HouseDetail