import { ADD } from "./actionTypes";

export const AddUSer = (name) => ({
    type: ADD,
    payload: name
});

