//component that creates the search bar
import { useState } from "react";
import { AsyncPaginate } from "reach-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from '../../api';
const Search = (onSearchChange) => {

   const [search, setSearch] = useState(null);

   const loadOptions = (inputValue) => {
      return fetch(
         `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
         geoApiOptions
      )
         .then(response => response.json())
         .then(response => console.log(response))
         .catch(err => console.error(err));
   }

   const handleOnChange = (searchData) => {
      setSearch(searchData);
      onSearchChange(searchData);
   }

   return (
      <AsyncPaginate
         placeholder="Search for city"
         debounceTimeout={600} //preventing bunch of requests
         value={search}
         onChange={handleOnChange}
         loadOptions={loadOptions}
      />
   )
}

export default Search;