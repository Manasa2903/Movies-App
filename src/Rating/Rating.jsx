import React from 'react';
import Rating from '@material-ui/lab/Rating';
//import Box from '@material-ui/core/Box';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./Rating.css"
const StarRating = (props) =>
{
    return (
        <div>
          <Rating 
            name="half-rating-read"
            size="small"
            value = {props.value}
            precision={0.1}
            className = "stars"
            emptyIcon={
            <StarBorderIcon fontSize="inherit" className="empty-star" />
        }
        readOnly
      />
        </div>
      )
}
export default StarRating