import axios from "axios";
import { CreateVolunteerDTO } from "../types";

const getInterests = async () => {
  try {
    const response = await axios.get(`/api/interest`);
    return response.data;
  } catch (err) {
    console.log("Error occured fetching interests", err);
    throw err;
  }
};

const register = async (details: CreateVolunteerDTO) => {
  try {
    const response = await axios.post(`/api/register`, details);
    return response.data;
  } catch (err) {
    console.log("Error occured during register", err);
    throw err;
  }
};

const getUserDetails = async (email: string) => {
  try {
    const response = await axios.get(`/api/user/${email}`);
    return response.data;
  } catch (err) {
    console.log("Error occured during register", err);
    throw err;
  }
};

export { getInterests, register, getUserDetails };
