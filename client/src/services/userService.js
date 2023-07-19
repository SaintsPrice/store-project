import {$authHost, $host} from "../http";

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

  static async rate(rate, userId, deviceId) {
    return $authHost.post('/api/rating', {rate, userId, deviceId})
  }

  static async getDeviceRate(deviceId) {
    return $host.get('/api/rating', {params: {deviceId}})
  }
}