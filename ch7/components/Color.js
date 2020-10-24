import { useRef } from "react";
import StarRating from "./StarRating";

const Color = ({
  title,
  color,
  rating,
  onRate = (f) => f,
  onDelete = (f) => f,
  onChange = (f) => f,
}) => {
  let colorName = useRef();

  function updateColorName(e) {
    e.preventDefault();
    onChange(colorName.value);
  }

  return (
    <div className="color" style={{ borderColor: color }}>
      <h1>{title}</h1>
      <form onSubmit={updateColorName}>
        <input
          type="text"
          placeholder="Write a new name here..."
          ref={(input) => (colorName = input)}
        />
        <input type="submit" value="Update" />
      </form>
      <input type="button" value="X" onClick={onDelete} />
      <div className="color-body" style={{ backgroundColor: color }}>
        <span>{color}</span>
      </div>
      <StarRating starsSelected={rating} onRate={onRate} />
    </div>
  );
};

module.exports = Color;
