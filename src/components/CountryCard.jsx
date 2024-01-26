import './CountryCard.css'

const CountryCard = (props) => {
    const { name, population, flags, region, capital } = props.countryData;

    return (
        <>
            <div className='countries'>
                <div className='countries__wrapper'>
                <img src={flags.png} alt={name.common} />
                    <div className='countries__wrapper-text'>
                        <span>{name.common}</span>
                        <span>Population: {population}</span>
                        <span>Region: {region}</span>
                        <span>Capital: {capital}</span>
                    </div>
                </div>
            </div>
        </>
    );
};


export default CountryCard;
