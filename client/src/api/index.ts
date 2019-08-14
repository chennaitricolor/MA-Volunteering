import axios from "axios";

const getInterests = async () => {
  try {
    const response = await axios.get("/interest");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getOrgs = async () => {
  try {
    const response = await axios.get("/org");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
