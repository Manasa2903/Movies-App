import React, { Component } from 'react'
import './App.css';
import Movies from './Movies/Movies.jsx';
import Carousel from './Carousel/Carousel';
import Loader from 'react-loader-spinner';
import {v4 as uuid} from "uuid";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Navbar from './Navbar/Navbar';

class App extends Component {

  state = {
    movieData: [],
    inputVal : "",
    total_result: 1,
    pageCount : 1,
    url : "https://api.themoviedb.org/3/trending/all/week?api_key=4bfa76ff14b5cf956b8cf30872fc1d4e",
    totalPage : 1,
    isLoading : true
  }

  async componentDidMount()
  {
    try{
    const {url,pageCount} = this.state
    const popularFetchedData = await fetch(`${url}&page=${pageCount}`);
    const popularFetchedDataJson = await popularFetchedData.json()
    console.log(popularFetchedDataJson)
    this.setState(prevState => ({movieData : popularFetchedDataJson.results,totalPage : popularFetchedDataJson.total_pages, total_result : popularFetchedDataJson.total_results, isLoading : !prevState.isLoading}))
    }
    catch(error)
    {
      console.log("Error Occurred : ", error)
    }
  }

  
fetchData = async (event) =>
{
  
  try
  {  
    event.preventDefault()
    const {inputVal, url} = this.state
    console.log(this.state.pageCount, "568")
    //this.setState(prevState => ({ pageCount:1,isLoading : !prevState.isLoading}))
    //this.setState({pageCount:1})
    this.setState({isLoading: !this.state.isLoading, pageCount : 1})
    console.log(this.state.pageCount, "123")

    const fetchedData = await fetch(`${url}${inputVal}&page=1`)
    const fetchedDataJson = await fetchedData.json()
    console.log(fetchedDataJson)
    this.setState(prevState => ({movieData : fetchedDataJson.results, total_result : fetchedDataJson.total_results, totalPage : fetchedDataJson.total_pages, isLoading: !prevState.isLoading, pageCount : 1}))
  }
  catch(error)
  {
    console.log("Error Occurred : ", error)
  }
}

changeMovieName = (event) =>
{
  const searchInputVal = event.target.value
  console.log(searchInputVal)
  if(searchInputVal !== "")
  {
    this.setState({inputVal : event.target.value, url: "https://api.themoviedb.org/3/search/multi?api_key=4bfa76ff14b5cf956b8cf30872fc1d4e&language=en-US&query=", pageCount : 1})
  }
 
}

 loadMore = async () => {
  try {
     const {inputVal,movieData, pageCount,url} = this.state
     console.log(url)
     const fetchedData = await fetch(`${url}${inputVal}&page=${pageCount+1}`)
     const fetchedDataJson = await fetchedData.json()
     console.log(fetchedDataJson)
    const loadMoreMovies = [...movieData, ...fetchedDataJson.results]
     console.log(loadMoreMovies)
     this.setState(prevState => ({movieData : loadMoreMovies, pageCount : prevState.pageCount + 1}))
   } catch (error) {
    console.log("Error occurred " , error)  }
    }
  render() {
    
    const {movieData, pageCount, totalPage, total_result,isLoading} = this.state
    
    return (
      <div className="movie-app-container">
        {<Navbar/> }
        {<Carousel/>} 
      <form onSubmit={this.fetchData} className="form-container">
        <input type="search" onChange={this.changeMovieName} placeholder="Enter Movie Name" className="form-control search-input" id="searchMoviesInput" required />
        <button className="button" type="submit">Search</button>
      </form>
        
        {total_result === 0 ? 
        <div className="text-center mt-3">
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt="404" className="not-found-image mb-3"/>
          <p className="no-results">No movies match the search criteria</p>
        </div> : 
        <div className="movie-container">  
        <div className="movie-card-container">

        {
          isLoading ? (
            <Loader type="BallTriangle" color="#00BFFF" height={50} width={50} />
          ) :
          movieData.map(eachMovie => (
            <Movies key = {uuid()} eachData = {eachMovie}/>
          ))
          
        }
        </div>
        <div>
          {pageCount > totalPage ? <h1 className="no-results">No more movies to display</h1>:<div className="text-center mb-5"><button className = "button" onClick = {this.loadMore}>Load More </button></div>}
        </div>

        </div>
        }
      </div>
    )
  }
}

export default App


/*https://developers.themoviedb.org/3/getting-started/introduction
https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg

// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

const API_URL = 'https://api.themoviedb.org/3/';

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/AoFyZGDgfrQuH8ptYb41KVnTjJp.jpg

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}


// WEBPACK FOOTER //
// ./src/config.js
*/


/*
TO ADD

Footer
navbar
top html title logo
spinner change
modal 
change height of carousel in small devices
carousel images
click search again after getting results (interstellar) after clicking load more
transition for overview


//home page
spinner for load more
type - movie, tv show
*/