import React, { useContext } from 'react'
import { Contexts } from '../../context/DataContext'
import './Houses.css'

function Houses() {
    const { houses, getHouseDetail } = useContext(Contexts)


    return (
        <section className='house-section container'>
            <h1 className='house-h1'>Houses</h1>
            <div className='houses-container'>
                {houses && houses.map((house) => (
                    <div onClick={() => getHouseDetail(house.slug)} key={house.slug} className='houses'>
                        <div className='img-container'>
                        <img className='house-img' src={`./img/${house.slug}.png`} alt='images extract from a api' />
                        </div>
                        <p className='house-title'>{house.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Houses