import {makeAutoObservable} from 'mobx'
import DeviceService from '../services/deviceService'

class DeviceStore {

  types = []
  brands = []
  devices = []
  oneDevice = {}
  deviceInfo = []
  selectedType = {}
  selectedBrand = {}

  constructor() {

    makeAutoObservable(this)

  }

  setTypes(types) {
    this.types = types
  }

  setBrands(brands) {
    this.brands = brands
  }

  setDevices(devices) {
    this.devices = devices
  }

  setDevice(device) {
    this.oneDevice = device
  }

  setSelectedType(selectedType) {
    this.selectedType = selectedType
  }

  setSelectedBrand(selectedBrand) {
    this.selectedBrand = selectedBrand
  }

  setDeviceInfo(deviceInfo) {
    this.deviceInfo = deviceInfo
  }

  async getTypes() {
    try {
      const {data} = await DeviceService.getTypes()

      this.setTypes(data)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async getBrands() {
    try {
      const {data} = await DeviceService.getBrands()

      this.setBrands(data)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async getDevices(typeId, brandId) {
    try {
      const {data} = await DeviceService.getDevices(typeId, brandId)

      this.setDevices(data.rows)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async getOneDevice(deviceId) {
    try {
      const {data} = await DeviceService.getOneDevices(deviceId)

      this.setDevice(data)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async getDeviceInfo(deviceId) {
    try {
      const {data} = await DeviceService.getDeviceInfo(deviceId)

      this.setDeviceInfo(data)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }
}

export default new DeviceStore()