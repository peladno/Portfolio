import axios from "axios";

export const SendEmail = async ({ fullName, email, message, setSend }) => {
  try {
    const datas = { fullName, email, message };
    let res = await axios.post("https://portfoliojavierperez.herokuapp.com/send", datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.msg);
  }
};
