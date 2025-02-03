import { headers, baseUrl } from '../lib/constants.js'
import axios from 'axios'

async function myself () {
  const result = await axios.get(`${baseUrl}/myself`, {
    headers: headers
  })
  return result.data
}

export { myself }