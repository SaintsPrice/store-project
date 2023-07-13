import axios from 'axios';
import {makeAutoObservable} from 'mobx'
import { REACT_APP_API_URL } from '../http';
import UserService from '../services/userService'

class UserStore {

  isAuth = false;
  user = {};

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user
  }

  async registration(email, password, name, family, role) {
    try {
      const {data} = await UserService.registration(email, password, name, family, role)
      localStorage.setItem('token', data.accessToken)
      console.log(data)
      this.setIsAuth(true)
      console.log(this.isAuth)
      this.setUser(data.user)
    }
    catch(e) {
      console.log(e.message)
    }
  }

  async login(email, password) {
    try {
      const {data} = await UserService.login(email, password)

      localStorage.setItem('token', data.accessToken)
      this.setIsAuth(true)
      this.setUser(data.user)
      
    }
    catch(e) {
      console.log(e.message)
    }
  }

  async logout() {
    try {
      await UserService.logout()
      localStorage.removeItem('token')
  
      this.setIsAuth(false)
      this.setUser({})
    }
    catch(e) {
      console.log(e.message)
    }
  }

  async checkAuth() {
    try {
      const {data} = await axios.get(`${REACT_APP_API_URL}api/user/refresh`, {withCredentials: true})

      localStorage.setItem('token', data.accessToken)
      this.setIsAuth(true)
      console.log(data.user)
      this.setUser(data.user)
    }
    catch(e) {
      console.log(e.message)
    }
  }
}

export default new UserStore()