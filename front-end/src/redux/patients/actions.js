import axios from "axios";
import {
  GET_ALL_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_FAILURE,
} from "./actionTypes";

export const getAllPatientsRequest = (payload) => ({
  type: GET_ALL_PATIENTS_REQUEST,
  payload,
});

export const getAllPatientsSuccess = (payload) => ({
  type: GET_ALL_PATIENTS_SUCCESS,
  payload,
});

export const getAllPatientsFailure = (payload) => ({
  type: GET_ALL_PATIENTS_FAILURE,
  payload,
});

export const getAllPatients = (payload) => async (dispatch) => {
  console.log(payload);
  dispatch(getAllPatientsRequest(payload));
  const { page, limit } = payload;
  const config = {
    method: "get",
    url: `http://localhost:5000/api/patients/get-all-patients?page=${page}&limit=${limit}`,
  };

  try {
    const response = await axios(config);
    dispatch(getAllPatientsSuccess(response.data));
  } catch (err) {
    dispatch(getAllPatientsFailure(err));
  }
};
