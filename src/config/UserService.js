import StorageService from "./StorageService";
import { SESSION_USER } from "./session";

class UserService {
  static all = StorageService.get(SESSION_USER);
  static token() {
    return this.all ? this.all.token : null;
  }

  static user() {
    return this.all ? this.all.user : null;
  }
}

export default UserService;
