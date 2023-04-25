import axios from "axios";

axios.defaults.baseURL = "https://644582bdb80f57f581bbc146.mockapi.io/";

export const getUsers = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    window.alert(error.message);
  }
};
