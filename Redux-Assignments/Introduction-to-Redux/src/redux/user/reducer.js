import { ADD } from "./actionTypes";

const initialState = [];


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        default:
            return state
    }
}