const CountriesItem = (props) => {
  const { country } = props;
  return (
    // <div>
    //     <img src={country.image}/>
    //     {country.name}
    //     {country.rank}
    //     {country.location}

    // </div>
    <div className="flex flex-col m-4">


      {/* <img src={country.image} className="w-25 h-20 object-cover"/> */}
      <div className="flex justify-between m-1">
        <div className="text-xl font-medium">{country.name}</div>
        <div className="text-rose-300">
          <i className="fa-solid fa-star"></i>
          {country.rank}
        </div>
      </div>
      <div className="m-1 text-stone-600">
        <i className="fa-solid fa-location-dot mr-1"></i>
        {country.location}
      </div>          
    </div>
  );
};
export default CountriesItem;
