const landingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PENDING':
      return {
        loading: true,
      };
    default:
      return state;
  }
};
export default landingReducer;
