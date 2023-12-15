import React, { createContext, useEffect, useState } from "react";


export const Contexts = createContext();


export const Data = ({ children }) => {

    const housesURL = 'https://api.gameofthronesquotes.xyz/v1/houses';
    const charactersURL = 'https://api.gameofthronesquotes.xyz/v1/characters';
    const quotesURL = 'https://api.gameofthronesquotes.xyz/v1/random/5';
    const charQuotes = 'https://api.gameofthronesquotes.xyz/v1/author'

    const [houses, setHouses] = useState();
    const [characters, setCharacters] = useState();
    const [quotes, setQuotes] = useState();
    const [houseDetail, setHouseDetail] = useState();
    const [characterQuote, setCharacterQuote] = useState();

    const getHouses = () => {
        fetch(housesURL)
            .then(res => res.json())
            .then(data => setHouses(data))
    };

    const getCharacters = () => {
        fetch(charactersURL)
            .then(res => res.json())
            .then(data => setCharacters(data))
    }

    const getQuotes = () => {
        fetch(quotesURL)
            .then(res => res.json())
            .then(data => setQuotes(data))
    }

    const getHouseDetail = (name) => {
        fetch(`https://api.gameofthronesquotes.xyz/v1/house/${name}`)
            .then(res => res.json())
            .then(data => setHouseDetail(data))
    }

    const getCharacterQuote = (id) => {
        fetch(`https://api.gameofthronesquotes.xyz/v1/author/${id}/1`)
            .then(res => res.json())
            .then(data => setCharacterQuote(data))
    }

    useEffect(() => {
        getHouses();
        getCharacters();
        getQuotes();
    }, [houseDetail, characterQuote])

    return (
        <Contexts.Provider value={{ houses, characters, quotes, getHouseDetail, houseDetail, getQuotes, getCharacterQuote, characterQuote }}>
            {children}
        </Contexts.Provider>
    )
}