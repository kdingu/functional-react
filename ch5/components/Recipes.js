import Instructions from "./Instructions";
import IngredientList from "./IngredientList";
import Summary from "./Summary";

const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <Summary
      ingredients={ingredients.length}
      steps={steps.length}
      title={name}
    />
    <IngredientList list={ingredients} />
    <Instructions title="Cooking instructions" steps={steps} />
  </section>
);

module.exports = Recipe;
