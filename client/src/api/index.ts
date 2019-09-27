import axios from 'axios';
import { CreateVolunteerDTO } from '../types';

const getInterests = async () => {
  const response = await axios.get(`/api/interest`);
  return response.data;
};

const register = async (details: CreateVolunteerDTO) => {
  const response = await axios.post(`/api/register`, details);
  return response.data;
};

const getUserDetails = async (mobileNumber: string) => {
  try {
    const response = await axios.post(`/api/user`, {
      phone: mobileNumber,
    });
    return response.data;
  } catch (err) {
    console.log('Error occured while fetching user details', err);
  }
};

export { getInterests, register, getUserDetails };
