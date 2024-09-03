const token = (state = localStorage.getItem("token") || null, action) => {
  switch (action.type) {
    case "LOG_IN":
      state = action.payload;
      localStorage.setItem("token", state);
      return state;

    default:
      return state;
  }
};
export default token;
