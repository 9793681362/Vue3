import axios from 'axios'

const baseURL = 'http://139.196.213.64:8000'

const instance = axios.create({
  baseURL,
  timeout: 100000
})

export default instance
export { baseURL }
