class StorageService {
  static set(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static remove(key) {
    return localStorage.removeItem(key);
  }
}

export default StorageService;
