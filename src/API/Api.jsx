import axios from 'axios';
import { API_MAIL } from './URL';

export const SendEmail = async ({ fullName, email, message }) => {
  try {
    const data = { fullName, email, message };
    const response = await axios.post(API_MAIL, data);
    return response;
  } catch (error) {
    return error;
  }
};
