import StarRating from "./StarRating";

const Color = ({
  title,
  color,
  rating,
  onRate = (f) => f,
  onDelete = (f) => f,
}) => (
  <div className="color" style={{ borderColor: color }}>
    <h1>{title}</h1>
    <input type="button" value="X" onClick={onDelete} />
    <div className="color-body" style={{ backgroundColor: color }}>
      <span>{color}</span>
    </div>
    <StarRating starsSelected={rating} onRate={onRate} />
  </div>
);

module.exports = Color;
