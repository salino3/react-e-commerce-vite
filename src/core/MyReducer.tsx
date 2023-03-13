import { AllAction } from "./interfaces";

export const MyReducer = (state: any, action: AllAction) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "CHANGE_CHECKBOX":
      return {
        ...state,
        products: action.payload,
      };
    case "CHANGE_ALL_FALSE":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
