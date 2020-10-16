const Ingredient = ({ name, amount, measurement }) => (
  <li>
    <span className="amount">{amount}</span>
    <span className="measurement">{measurement}</span>
    <span className="name">{name}</span>
  </li>
);

module.exports = Ingredient;
