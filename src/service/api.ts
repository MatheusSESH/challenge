import axios from 'axios'

const api = axios.create({
  baseURL: 'https://app.olimpiadas.app'
})

export default api;