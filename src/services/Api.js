import axios from 'axios'

export const fetchFilms = () => axios.get(`http://swapi.dev/api/films`)
export const fetchFilmInfo = (id) => axios.get(`https://swapi.dev/api/films/${id}/`)
export const fetchPeople = () => axios.get(`https://swapi.dev/api/people`)
export const fetchCharacter = (id) => axios.get(`https://swapi.dev/api/people/${id}`) 
export const fetchPlanet = (id) => axios.get(`https://swapi.dev/api/planets/${id}/`)
export const fetchSpecies = (id) => axios.get(`https://swapi.dev/api/species/${id}/`)
export const fetchStarship = (id) => axios.get(`https://swapi.dev/api/starships/${id}/`)
export const fetchVehicle = (id) => axios.get(`https://swapi.dev/api/vehicles/${id}/`)