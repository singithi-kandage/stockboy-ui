const InitialState = {
  user: {
    username: ""
  },
  products: [],
  vendors: [],
  shoppingList: {
    savedProducts: []
  }
};

const GetInitialState = () => {
  return InitialState;
};

export default GetInitialState;
