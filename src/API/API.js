import axios from "axios";

axios.defaults.baseURL = "https://644582bdb80f57f581bbc146.mockapi.io/";

export const getUsers = async () => {
  try {
    const response = await axios.get("/users");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
