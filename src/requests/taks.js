import axios from "axios";
import API_BASE from "../config/api.config";

export const getTasks = async () => {
  const res = await axios.get(`${API_BASE}/notes`);
  return res.data;
};

export const postTasks = async (body) => {
  const res = await axios.post(`${API_BASE}/notes`, body);
  return res.data;
};
