import axios from "axios";
import { CreateVolunteerDTO } from "../types";

const getInterests = async () => {
  try {
    const response = await axios.get(`/api/interest`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const register = async (details: CreateVolunteerDTO) => {
  try {
    const response = await axios.post(`/api/register`, details);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getInterests, register };
