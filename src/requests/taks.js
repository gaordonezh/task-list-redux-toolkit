import axios from "axios";
import UserService from "config/UserService";
import API_BASE from "../config/api.config";

export const getTasks = async () => {
  const res = await axios.get(`${API_BASE}/notes`, {
    headers: { Authorization: UserService.token() },
  });
  return res.data;
};

export const postTasks = async (body) => {
  const res = await axios.post(`${API_BASE}/notes`, body, {
    headers: { Authorization: UserService.token() },
  });
  return res.data;
};
