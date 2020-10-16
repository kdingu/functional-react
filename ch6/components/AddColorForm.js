import React, { useRef } from "react";

// statefull??? class component example
// class AddColorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.title = React.createRef();
//     this.color = React.createRef();
//     this.submitForm = this.submitForm.bind(this);
//   }
//   submitForm(e) {
//     e.preventDefault();
//     let t = this.title.current.value,
//       c = this.color.current.value;
//     this.props.onAddColor(t, c);
//     t = "";
//     c = "#ffffff";
//   }
//   render() {
//     return (
//       <div className="add-color-form">
//         <form onSubmit={this.submitForm}>
//           <input
//             type="text"
//             placeholder="Color title"
//             required
//             ref={this.title}
//           />
//           <input type="color" required ref={this.color} />
//           <input type="submit" value="Add" />
//         </form>
//       </div>
//     );
//   }
// }

// stateless??? functional component example
const AddColorForm = ({ onAdd = (f) => f }) => {
  let title = useRef(),
    color = useRef();

  function add(e) {
    e.preventDefault();
    onAdd(title.value, color.value);
    title.value = "";
    color.value = "#fff";
  }

  return (
    <div className="add-color-form">
      <form onSubmit={add}>
        <input
          type="text"
          placeholder="Color title"
          required
          ref={(input) => (title = input)}
        />
        <input type="color" required ref={(input) => (color = input)} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

module.exports = AddColorForm;
