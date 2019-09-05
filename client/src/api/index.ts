import axios from "axios";
import { CreateVolunteerDTO } from "../types";

const API = "https://us-central1-tech-for-cities.cloudfunctions.net/api";

const auth = async () => {
  const url = new URL(window.location.href);
  const token = url.searchParams.get("token");
  const response = await axios.get(`${API}/user/${token}`);
  return response.data;
};

const getInterests = async () => {
  const response = await axios.get(`/api/interest`);
  return response.data;
};

const register = async (details: CreateVolunteerDTO) => {
  const response = await axios.post(`/api/register`, details);
  return response.data;
};

const getUserDetails = async (email: string) => {
  try {
    const response = await axios.get(`/api/user/${email}`);
    return response.data;
  } catch (err) {
    console.log("Error occured while fetching user details", err);
  }
};

export { getInterests, register, getUserDetails, auth };
