import {makeAutoObservable} from 'mobx';
import DeviceService from '../services/deviceService';

class DeviceStore {

  types = [];
  brands = [];
  devices = [];
  oneDevice = {};
  basketDevices = []
  deviceInfo = [];
  selectedType = {};
  selectedBrand = {};
  page = 1;
  totalCount = 0;
  limit = 6;

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

  setPage(page) {
    this.page = page
  }

  setTotalCount(totalCount) {
    this.totalCount = totalCount
  }

  setLimit(limit) {
    this.limit = limit
  }

  setBasketDevices(basketDevices) {
    this.basketDevices.push(basketDevices)
  }

  deleteBasketDevice(index) {
    this.basketDevices.splice(index, 1)
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

  async getDevices(typeId, brandId, page, limit) {
    try {
      const {data} = await DeviceService.getDevices(typeId, brandId, page, limit)
      this.setDevices(data.rows)
      this.setTotalCount(data.count)
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