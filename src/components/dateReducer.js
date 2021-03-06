const dateReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default dateReducer;
