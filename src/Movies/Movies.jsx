import "./Movies.css"
import StarRating from "../Rating/Rating"

const Movies = (props) =>
{
    const {eachData} = props
    
    
   const imageSrc =  eachData.poster_path === null || eachData.poster_path === undefined ? "https://cdn.browshot.com/static/images/not-found.png" :`https://image.tmdb.org/t/p/w500${eachData.poster_path}` 

    return (
        <div className= "movie-card">
          <img src={imageSrc} className = "poster" alt={eachData.title}/>
          <div className="movie-details">
          <div className="media-type">{eachData.media_type === "tv" ?<p className="media-icon">Tv Show</p>  : <p className="media-icon">Movie</p>}</div>
          <p className="title">{eachData.title === null || eachData.title === undefined ? "Title Not Available" : eachData.title}</p>
              <div className="movie-details-preview">
              <p className="release-date">{eachData.release_date === undefined?"":eachData.release_date.substr(0,4)}</p>
                <span className="review">{<StarRating value = {eachData.vote_average/2}/>}</span>
              </div>
              
              <p className="movie-overview">{eachData.overview === undefined?"":eachData.overview.substr(0,100)}...</p>
            </div>
        </div>
        )
}

export default Movies