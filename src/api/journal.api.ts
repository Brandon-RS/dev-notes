import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://dev-notes-api-default-rtdb.firebaseio.com',
})

export default journalApi
