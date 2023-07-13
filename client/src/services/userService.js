import {$authHost} from "../http";

export default class UserService {
  static async registration(email, password, name, family, role) {
    return $authHost.post('/api/user/registration', {email, password, name, family, role})
  }

  static async login(email, password) {
    return $authHost.post('/api/user/login', {email, password})
  }

  static async logout() {
    return $authHost.post('/api/user/logout')
  }
}