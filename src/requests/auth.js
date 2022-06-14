import axios from "axios";
import { API_BASE } from "config/api.config";

export const signInUser = async (info) => {
  const result = await axios.post(`${API_BASE}/auth`, info);
  return result.data;
};

export const signUpUser = async (info) => {
  const result = await axios.post(`${API_BASE}/user`, info);
  return result.data;
};
