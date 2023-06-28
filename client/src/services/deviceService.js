import {$host} from "../http";

export default class DeviceService {
  static async getTypes() {
    return await $host.get('/api/type')
  }

  static async getBrands() {
    return await $host.get('/api/brand')
  }

  static async getDevices(typeId, brandId) {
    return await $host.get('/api/device', {params: {
      typeId, brandId
    }})
  }

  static async getOneDevices(deviceId) {
    return await $host.get(`/api/device/${deviceId}`)
  }
}