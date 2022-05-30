import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../Redux/Actions/Actions";

const ModalEdit = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(props.data.name);
  const [age, setAge] = useState(props.data.age);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
      id: props.data.id,
    };
    dispatch(editUser(newUser));
  };

  return (
    <div>
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
    </div>
  );
};

export default ModalEdit;
