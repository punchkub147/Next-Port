import { createStore } from "easy-peasy";
import portfolio from "./portfolio";

const model = {
  portfolio
};

export default model;

export function initializeStore(initialState) {
  return createStore(model, initialState);
}
