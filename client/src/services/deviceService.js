import {$host} from "../http";

export default class DeviceService {
  static async getTypes() {
    return await $host.get('/api/type')
  }

  static async getBrands() {
    return await $host.get('/api/brand')
  }

  static async getDevices(typeId, brandId, page, limit = 6) {
    return await $host.get('/api/device', {params: {
      typeId, brandId, page, limit
    }})
  }

  static async getOneDevices(deviceId) {
    return await $host.get(`/api/device/${deviceId}`)
  }

  static async getDeviceInfo(deviceId) {
    return await $host.get('/api/device-info', {params: {
      deviceId
    }})
  }
}