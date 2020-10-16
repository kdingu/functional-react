import { module } from "../webpack.config";
import Recipes from "./Recipes";

export const Menu = ({ r }) => (
  <article>
    <header>
      <h1>The Best Recipes</h1>
    </header>
    <div className="recipes">
      {r.map((o, i) => (
        <Recipes key={i} {...o} />
      ))}
    </div>
  </article>
);

module.exports = Menu;
