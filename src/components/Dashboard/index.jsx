import { Container } from "./styles";
import arrowImg from "../../assets/arrow.svg";
import magnifierImg from "../../assets/lupa.svg";
import { CountriesList } from "../CountriesList";
import React, { useState } from "react";

export function Dashboard(){
    const [inputValue, setInputValue] = useState('all');
    const [filteredRegion, setFilteredRegion] = useState('');
    const [checkInput, setCheckInput] = useState(false);

    function handleInput(event){
        setInputValue(event.target.value)
    }

    function handleFilterRegion(event){
        setFilteredRegion(event.currentTarget.innerHTML)
        handleInputChange();
    }   

    function handleInputChange(){
        checkInput? setCheckInput(false) : setCheckInput(true);
    }

    const filter = {
        inputValue,
        filteredRegion
    }
    return (
        <Container>
            <div className="menu-wrapper">
                <div className="search-wrapper">
                    <img src={magnifierImg} alt="Magnifier icon" />
                    <input type="text"
                           placeholder="Search for a country..."
                           onInput={handleInput}
                           className="searchCountry"
                    />
                </div>

                <div className="filter-wrapper">
                    <input id="menu-toggle" type="checkbox" onChange={handleInputChange} checked={checkInput}/>
                    <label className="menu-button-container" htmlFor="menu-toggle">
                        <div className="menu-button">{filteredRegion === '' ? 'Filter by Region' : filteredRegion}</div>
                        <img src={arrowImg} alt="arrow icon" />
                    </label>
                    <ul className="menu">
                        <li onClick={handleFilterRegion}>Africa</li>
                        <li onClick={handleFilterRegion}>America</li>
                        <li onClick={handleFilterRegion}>Asia</li>
                        <li onClick={handleFilterRegion}>Europe</li>
                        <li onClick={handleFilterRegion}>Oceania</li>
                    </ul>
                    
                </div>
            </div>
            <CountriesList filter={filter}/>
        </Container>
    );
}