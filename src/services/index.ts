import axios from "axios";

export const apiAuth = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
});
