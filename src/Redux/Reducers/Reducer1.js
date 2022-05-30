const initialState = {
  users: [
    {
      name: "John",
      age: 30,
      id: 5325687623,
    },
    {
      name: "kofi",
      age: 35,
      id: 762359342,
    },
    {
      name: "Kwaku",
      age: 20,
      id: 827367864,
    },
    {
      name: "Abu",
      age: 18,
      id: 62352864,
    },
  ],

  students: [
    {
      name: "John",
      gen: 3,
    },
  ],
  students: [],
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "EDIT_USER":
      const data = state.users.filter((user) => user.id !== action.payload.id);
      return { ...state, users: [...data, action.payload] };

    case "DELETE_USER":
      const newUsers = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: [...newUsers] };
    default:
      return state;
  }
};

export default Reducer1;
