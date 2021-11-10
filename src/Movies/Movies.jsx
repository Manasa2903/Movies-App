import "./Movies.css"
import StarRating from "../Rating/Rating"

const Movies = (props) =>
{
    const {eachData} = props
    const {title, release_date, vote_average, overview, media_type, poster_path,name} = eachData
    
   const imageSrc =  poster_path === null || poster_path === undefined ? "https://cdn.browshot.com/static/images/not-found.png" :`https://image.tmdb.org/t/p/w500${poster_path}` 

    return (
        <div className= "movie-card">
          <img src={imageSrc} className = "poster" alt={title}/>
          <div className="movie-details">
          <div className="media-type">{media_type === "tv" ?<p className="media-icon">Tv Show</p>  : <p className="media-icon">Movie</p>}</div>
          <p className="title">{title === null || title === undefined ? (name === null || name === undefined ? "Title Not Available" : name) : title}</p>
              <div className="movie-details-preview">
              <p className="release-date">{release_date === undefined?"":release_date.substr(0,4)}</p>
                <span className="review">{<StarRating value = {vote_average/2}/>}</span>
              </div>
              
              <p className="movie-overview">{overview === undefined?"":overview.substr(0,100)}...</p>
            </div>
        </div>
        )
}

export default Movies