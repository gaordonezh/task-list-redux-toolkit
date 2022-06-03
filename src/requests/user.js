import axios from "axios";
import API_BASE from "config/api.config";
import UserService from "config/UserService";

export const getUserInfo = async () => {
  if (UserService.user() && UserService.token()) {
    const result = await axios.get(`${API_BASE}/user/profile/${UserService.user()}`, {
      headers: { Authorization: UserService.token() },
    });
    return result.data;
  } else return null;
};
