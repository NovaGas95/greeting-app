import React from 'react'
import './search.css'
import { AsyncPaginate } from 'react-select-async-paginate'
import { useState, useEffect } from 'react'
import { GEO_API_URL, geoApiOptions } from '../../api'



const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = (inputValue) => {

    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <AsyncPaginate
      placeholder="Search for a proper city name:"
      value={search}
      debounceTimeout={600}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search