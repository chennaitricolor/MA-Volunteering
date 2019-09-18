import { User } from "./types";
import moment from "moment";

const transformUserDetails = (data: any): User => {
  const dob =
    data && moment(data.user_dob._seconds * 1000).format("DD MMM YYYY");

  return {
    email: data.user_email,
    name: data.user_name,
    gender: data.user_gender,
    mobileNumber: data.user_phone_number,
    dateOfBirth: dob
  };
};

export { transformUserDetails };
