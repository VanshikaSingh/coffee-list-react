// const cartItem={
//   coffeeName:"",
//   quantity:0, 
//  }
const initialState = {
    loading: false,
    coffees: [],
    error: null,
    page: 1,
    cartItems: [{
    //  coffeeName:"",
    //  quantity:0, 
    }]
}
  // Use the initialState as a default value
   const coffeeReducer = (state= initialState, action) => {
    switch (action.type) {
        case "LOAD_COFFEES":
          return {
            ...state,
            loading: true
          };
        case "LOAD_COFFEE_SUCCESS":
          return {
            ...state,
            loading: false,
            coffees: action.payload
          };
          case "LOAD_COFFEE_FAIL":
            return {
              ...state,
              loading: false,
              coffees: action.payload
            };
            case "PAGE_NUMBER_PAGINATED":
              return {
                ...state,
                loading: false,
                page: action.payload
              };
              case "ADD_ITEMS_TO_CART":
                const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
                return{
                  ...state,
                  cartItems: itemInCart ? itemInCart.quantity++ :  state.cartItems.push({ ...action.payload, quantity: 1 })
                
              };
                // return {
                //   ...state,
                //   cartItems:[...state.cartItems,action.payload]
                // };
                case "INCREMENT_QUANTITY": 
                    const item = state.cartItems.find((item) => item.id === action.payload);
                    return {
                      ...state,
                      cartItems: item.quantity++
                  };
                case "REMOVE_ITEMS_FROM_CART":
                  const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
                  return{
                    ...state,
                    cartItems : removeItem
                  }
                  
                            
                    //  return {
                //   ...state,
                //   cartItems: [...state.cartItems, action.payload]
                // };
                  case "DECREMENT_QUANTITY":
                    const citem = state.cartItems.find((item) => item.id === action.payload);
                    return{
                      ...state,
                      cartItems: citem.quantity === 1 ? citem.quantity = 1 : citem.quantity--
                    }
                    
                  
        default:
          return state;
      }
    };
    export default coffeeReducer;