import axios from "axios";
import {
  GET_ALL_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_FAILURE,
  DELETE_PATIENT_REQUEST,
  DELETE_PATIENT_SUCCESS,
  DELETE_PATIENT_FAILURE,
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

export const deletePatientRequest = (payload) => ({
  type: DELETE_PATIENT_REQUEST,
  payload,
});

export const defaultPatientSuccess = (payload) => ({
  type: DELETE_PATIENT_SUCCESS,
  payload,
});

export const deletePatientFailure = (payload) => ({
  type: DELETE_PATIENT_FAILURE,
  payload,
});

export const deletePatient = (payload) => async (dispatch, getState) => {
  dispatch(deletePatientRequest(payload));

  const { patients } = getState();
  const { patients: records } = patients;

  const config = {
    method: "delete",
    url: `http://localhost:5000/api/patients/delete-patient?id=${payload}`,
  };

  const data = records.filter((record) => record._id !== payload);

  try {
    await axios(config);
    dispatch(defaultPatientSuccess(data));
  } catch (err) {
    dispatch(deletePatientFailure(err));
  }
};
