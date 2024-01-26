import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

import './CountryCard.css'

const FetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [originalCountries, setOriginalCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');

      if (response.ok) {
        const data = await response.json();
        setCountries(data);
        setOriginalCountries(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filteredCountries = originalCountries.filter(country =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="search">
        <div className="search-input">
        Search countries
        <input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search countries"
        />
        </div>

        {countries.length === 0 && (
        <div className="countries__message">No matching countries found!</div>
        )}

        {countries.map((country, index) => (
        <CountryCard key={index} countryData={country} />
        ))}
    </div>
  );
};

export default FetchCountries;
