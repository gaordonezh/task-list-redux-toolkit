import axios from "axios";
import { API_BASE, API_UNSPLASH, KEY_UNSPLASH } from "config/api.config";
import UserService from "config/UserService";

export const getUserInfo = async () => {
  if (UserService.user() && UserService.token()) {
    const result = await axios.get(`${API_BASE}/user/profile/${UserService.user()}`, {
      headers: { Authorization: UserService.token() },
    });
    return result.data;
  } else return null;
};

export const getUnsplashImages = async (page = 1, per_page = 30, order_by = "popular") => {
  const result = await axios.get(
    `${API_UNSPLASH}/photos/?client_id=${KEY_UNSPLASH}&page=${page}&per_page=${per_page}&order_by=${order_by}`
  );
  const res = result.data.map((item) => ({ id: item.id, images: item.urls }));
  return res;
};

export const putUser = async (data, userId) => {
  const result = await axios.put(`${API_BASE}/user/profile/${userId}`, data, {
    headers: { Authorization: UserService.token() },
  });
  return result.data;
};
