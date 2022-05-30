import logo from "./logo.svg";
import "./App.css";
import { connect, useSelector } from "react-redux";
import React, { Component, useState } from "react";
import { addUser } from "./Redux/Actions/Actions";
import "bootstrap/dist/css/bootstrap.min.css";
import EditRedux from "./Component/EditRedux";

function App(props) {
  console.log(props);

  const [name, setName] = useState();
  const [age, setAge] = useState();

  const stateFromStore = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
    };
    props.addUser(newUser);
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
        />
        <br />
        <button>submit</button>
      </form>

      {stateFromStore.map((item, index) => {
        return (
          <div key={index}>
            <EditRedux data={item} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.users,
  };
};

const mapDispatchToProps = {
  addUser: addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       state: this.props.state,
//     };
//     this.props = props;
//   }

//   render() {
//     return (
//       <div>
//         {console.log(this.props.state)}
//         {this.props.state.map((item, index) => {
//           return (
//             <div key={index}>
//               <h1>{item.name}</h1>
//               <h1>{item.age}</h1>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
