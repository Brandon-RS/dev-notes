import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key: apiKey,
  }
})

export default authApi
