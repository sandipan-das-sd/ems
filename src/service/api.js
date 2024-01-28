import axios from "axios";

const URL = "http://localhost:8000";
//addUser is a function name
export const addUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/add`, data);
    return response.data;  // Return the data from the response
  } catch (error) {
    console.error("Error while calling Add user API", error.message);
    throw error;  // Re-throw the error to propagate it to the calling code
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data", error.message);
    throw error;
  }
};

export const getUsersData = async (data) => {
  try {
    const response = await axios.post(`${URL}/getUser`, data);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data", error.message);
    throw error;
  }
};

export const updateUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/updateUser`, data);
    return response.data;
  } catch (error) {
    console.error("Error while updating data", error.message);
    throw error;
  }
};

export const deleteUsers = async (data) => {
  try {
    const response = await axios.post(`${URL}/deleteUser`, data);
    return response.data;
  } catch (error) {
    console.error("Error while deleting data", error.message);
    throw error;
  }
};
