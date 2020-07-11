import axios from 'axios'

export const fetchFilms = () => axios.get(`http://swapi.dev/api/films`)
export const fetchFilmInfo = (id) => axios.get(`http://swapi.dev/api/films/${id}/`)
export const fetchPeople = () => axios.get(`http://swapi.dev/api/people`)
export const fetchCharacter = (id) => axios.get(`http://swapi.dev/api/people/${id}`) 
export const fetchPlanet = (id) => axios.get(`http://swapi.dev/api/planets/${id}/`)
export const fetchSpecies = (id) => axios.get(`http://swapi.dev/api/species/${id}/`)
export const fetchStarship = (id) => axios.get(`http://swapi.dev/api/starships/${id}/`)
export const fetchVehicle = (id) => axios.get(`http://swapi.dev/api/vehicles/${id}/`)