import axios from "axios";
import {API_MAIL} from "./URL"

export const SendEmail = async ({ fullName, email, message, setSend }) => {
  try {
    const datas = { fullName, email, message };
    let res = await axios.post(`${API_MAIL}`, datas);
    if (res) {
      setSend(res.data);
      console.log(res.data);
    } else {
      console.log(res);
    }
  } catch (error) {
    alert(error.response.data.msg);
    console.log(error)
  }
};
