import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getInterests = async () => {
  try {
    const response = await axios.get(`${apiUrl}/interest`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getOrgs = async () => {
  try {
    const response = await axios.get(`${apiUrl}/org`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
