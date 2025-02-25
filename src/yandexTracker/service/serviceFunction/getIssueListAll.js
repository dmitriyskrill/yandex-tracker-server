import { headers, baseUrl } from '../lib/constants.js'
import axios from 'axios'
import { mapIssueFromYandexTracker } from '#yandexTracker/service/lib/issueMapper.js'

async function getIssueListAll () {
  const result = await axios.post(
    `${baseUrl}/issues/_search?scrollType=sorted&perScroll=1000`,
    {},
    {
      headers
    }
  )
  return result.data.map(mapIssueFromYandexTracker)
}

export {
  getIssueListAll
}