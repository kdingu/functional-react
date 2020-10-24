import Color from "./Color";
import PropTypes from "prop-types";

const ColorList = ({
  colors = [],
  onRate = (f) => f,
  onDelete = (f) => f,
  onChange = (f) => f,
}) => (
  <div className="color-list">
    {/* display each color */}
    {colors.length <= 0 ? (
      <p>No colors. Start by adding a color.</p>
    ) : (
      colors.map((clr, index) => (
        <Color
          key={index}
          {...clr}
          onRate={(rating) => onRate(clr.id, rating)}
          onDelete={() => onDelete(clr.id)}
          onChange={(title) => onChange(clr.id, title)}
        />
      ))
    )}
  </div>
);

ColorList.propTypes = {
  colors: PropTypes.array,
};

module.exports = ColorList;
