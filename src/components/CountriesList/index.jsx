import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CountriesContainer } from "./styles";

// interface Country{
//     name: {
//         common: string
//     },
//     region: string,
//     capital: [],
//     population: number,
//     flags: {
//         svg: string
//     }
// }
// interface FilterProps{
//     filter: {
//         inputValue: string;
//         filteredRegion: string;
//     }
// }

export function CountriesList(props){
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        if(props.filter.inputValue === 'all' 
            && props.filter.filteredRegion === ''){ 
            api.get('all')
                .then(response => setCountries(response.data))
        }
        if(props.filter.inputValue !== 'all'){
            api.get(`/name/${props.filter.inputValue}`)
                .then(response => setCountries(response.data))
        }
        if(props.filter.filteredRegion !== '' 
            && (props.filter.inputValue === 'all' 
                || props.filter.inputValue === '')){
            api.get(`/region/${props.filter.filteredRegion}`)
                .then(response => setCountries(response.data))
        }
        if(props.filter.filteredRegion === ''
            && props.filter.inputValue === ''){
            api.get('all')
                .then(response => setCountries(response.data))
        }

    }, [props.filter.inputValue, props.filter.filteredRegion]);

    console.log(props.filter.inputValue, props.filter.filteredRegion)

    return (
        <CountriesContainer>
            {countries.map(country => {
                return(
                    <div key={country.name.common} className="wrapper">
                        <img src={country.flags.svg} alt={`${country.name.common}'s flag`}/>
                        <div className="content">
                            <h2>{country.name.common}</h2>
                            <p>
                                <strong>Popuplation: </strong>
                                {country.population}
                            </p>
                            <p>
                                <strong>Region: </strong>
                                {country.region}
                            </p>
                            <p>
                                <strong>Capital: </strong>
                                {country.capital}
                            </p>
                        </div>
                    </div>
                );
            })}
        </CountriesContainer>
    );
}