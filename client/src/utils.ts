import { User } from './types';
import moment from 'moment';
import * as R from 'ramda';

const transformUserDetails = (data: any): User => {
  const dob =
    data &&
    data.user_dob &&
    moment(data.user_dob._seconds * 1000).format('DD MMM YYYY');

  return {
    email: data.user_email,
    name: data.user_name,
    gender: data.user_gender,
    mobileNumber: data.user_phone_number,
    dateOfBirth: dob || '',
  };
};

const capitalize = (str: string): string =>
  R.replace(/^./, R.toUpper)(str.toLowerCase());

export { transformUserDetails, capitalize };
