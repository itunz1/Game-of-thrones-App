import React from 'react'
import './Home.css'
import Houses from '../Houses/Houses'
import HouseDetail from '../HouseDetail/HouseDetail'
import Characters from '../Characters/Characters'
import Quotes from '../Quotes/Quotes'

function Home() {
  return (
    <div className='App'>
        <Houses id='houses'/>
        <HouseDetail />
        <Characters id='characters'/>
        <Quotes id='quotes'/>
    </div>
  )
}

export default Home