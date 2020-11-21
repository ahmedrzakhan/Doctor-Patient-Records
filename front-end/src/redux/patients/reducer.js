import {
  GET_ALL_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_FAILURE,
} from "./actionTypes";

const initialState = {
  patients: [],
};

export const patientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PATIENTS_REQUEST:
      console.log(type, payload);
      return { ...state };

    case GET_ALL_PATIENTS_SUCCESS:
      console.log(type, payload);
      return { ...state, patients: payload };

    case GET_ALL_PATIENTS_FAILURE:
      console.log(type, payload);
      return { ...state };

    default:
      return state;
  }
};
