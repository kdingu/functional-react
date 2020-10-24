import React from "react";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
          title: "ocean at dusk",
          color: "#00c4e2",
          rating: 5,
        },
        {
          id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
          title: "lawn",
          color: "#26ac56",
          rating: 3,
        },
        {
          id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
          title: "bright red",
          color: "#ff0000",
          rating: 0,
        },
      ],
    };
    this.dev = true;
    this.addColor = this.addColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  addColor(title, color) {
    const c = { id: v4(), title, color, rating: 0 };
    const colors = [...this.state.colors, c];
    this.setState({ colors });
    if (this.dev) {
      console.log("title", title);
      console.log("color", color);
    }
  }

  deleteColor(id) {
    const colors = this.state.colors.filter((c) => c.id !== id);
    if (this.dev) {
      console.log(colors);
    }
    this.setState({ colors });
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map((c) =>
      c.id === id ? { id: c.id, title: c.title, color: c.color, rating } : c
    );
    if (this.dev) {
      console.log(colors);
    }
    this.setState({ colors });
  }

  updateTitle(id, title) {
    console.log(id, title);
  }

  render() {
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onAdd={this.addColor} />
        <ColorList
          colors={colors}
          onRate={this.rateColor}
          onDelete={this.deleteColor}
          onChange={this.updateTitle}
        />
      </div>
    );
  }
}

module.exports = App;
