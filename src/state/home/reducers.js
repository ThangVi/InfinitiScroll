import {
  SET_GALLERY,
} from "./actions";

export const INITIAL_STATE = {
  imageList: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GALLERY:
      return {
        ...state,
        imageList: action.payload,
      }
    default:
      return state;
  }
};