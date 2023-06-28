import axios from 'axios'

export const REACT_APP_API_URL = 'http://localhost:5000/'

const $host = axios.create({
  baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true
})

$authHost.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

$authHost.interceptors.response.use((config) => {
  return config},
  async (error) => {
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && !error.config._isRetry) {
      error.config._isRetry = true
      try {
        const response = await axios.get(`${REACT_APP_API_URL}/refresh`, {withCredentials: true})

        localStorage.setItem('token', response.data.accessToken)

        return $authHost.request(originalRequest)
      }
      catch(e) {
        console.log('Не авторизован')
      }
    }
    throw error
  })

  export {
    $host,
    $authHost
  }