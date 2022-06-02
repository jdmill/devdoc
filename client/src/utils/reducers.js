import { useReducer } from "react";
import { ADD_TO_PROJECT } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_PROJECT:
      return {
        ...state,
        componentArray: [...state.componentArray, action.component],
      };

    default:
      return state;
  }
};

export function useComponentReducer(initialState) {
  return useReducer(reducer, initialState);
}
