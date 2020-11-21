import {
  GET_ALL_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_FAILURE,
  DELETE_PATIENT_REQUEST,
  DELETE_PATIENT_SUCCESS,
  DELETE_PATIENT_FAILURE,
} from "./actionTypes";

const initialState = {
  patients: [],
  totalPatients: 0,
};

export const patientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PATIENTS_REQUEST:
      console.log(type, payload);
      return { ...state };

    case GET_ALL_PATIENTS_SUCCESS:
      console.log(type, payload);
      const { totalCount, current } = payload;
      return { ...state, patients: current, totalPatients: totalCount };

    case GET_ALL_PATIENTS_FAILURE:
      console.log(type, payload);
      return { ...state };

    case DELETE_PATIENT_REQUEST:
      console.log(type, payload);
      return { ...state };

    case DELETE_PATIENT_SUCCESS:
      console.log(type, payload);
      return { ...state, patients: payload };

    case DELETE_PATIENT_FAILURE:
      console.log(type, payload);
      return { ...state };

    default:
      return state;
  }
};
