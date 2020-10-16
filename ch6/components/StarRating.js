import React, { Component } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const StarRating = ({
  starsSelected = 0,
  totalStars = 5,
  onRate = (f) => f,
}) => (
  <div className="star-rating">
    {[...Array(totalStars)].map((el, index) => (
      <Star
        key={index}
        selected={index < starsSelected}
        onClick={() => onRate(index + 1)}
      />
    ))}
  </div>
);

// class StarRating extends Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             starsSelected: props.starsSelected || 0
//         }
//         this.change = this.change.bind(this)
//     }

//     change(starsSelected) {
//         this.setState({starsSelected})
//     }

//     render() {
//         const {totalStars} = this.props
//         const {starsSelected} = this.state

//         return (
//             <div className="star-rating">
//                 {[...Array(totalStars)].map( (n,i) => (
//                     <Star key={i} selected={ i < starsSelected } onClick={() => this.change(i+1)}/>
//                     ) )}
//                 <p>{starsSelected} of {totalStars} stars</p>
//             </div>
//         )
//     }
// }

StarRating.propTypes = {
  totalStars: PropTypes.number,
  starsSelected: PropTypes.number,
  onRate: PropTypes.func,
};
// StarRating.defaultProps = {
//     totalStars: 5
// }

module.exports = StarRating;
