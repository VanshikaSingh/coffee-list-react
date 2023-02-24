import { ActionCreators } from "@redux-devtools/core";
import { Action } from "@remix-run/router";

export const loadCoffees = () =>({
        type: "LOAD_COFFEES"
})
export const loadCoffeesSuccess = (coffees) =>({

        type: "LOAD_COFFEE_SUCCESS",
        payload: coffees,
});
export const loadCoffeesFail = (error) =>({
        type: "LOAD_COFFEE_FAIL",
        payload: error,
})
export const pageNumberPaginated = (page) =>({
        type: "PAGE_NUMBER_PAGINATED",
        payload: page
})
export const addItemsToCart = (name, number) =>({
        type:"ADD_ITEMS_TO_CART",
        payload: [{
                coffeeName: name,
                quantity: number
        }]
})
export const removeItemsFromCart = (name, number) =>({
        type:"REMOVE_ITEMS_FROM_CART",
        payload: [{
                coffeeName: name,
                quantity: number
        }]
})
export const decrementQuantity = (quantity) =>({
        type:"DECREMENT_QUANTITY",
        payload: quantity
});
export const incrementQuantity = (quantity) =>({
        type:"INCREMENT",
        payload: quantity
})