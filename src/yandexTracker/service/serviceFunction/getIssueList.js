import { headers, baseUrl } from '../lib/constants.js'
import axios from 'axios'
import { getIssueWorklogById } from './getIssueWorklogById.js'
import { mapIssueFromYandexTracker } from '#yandexTracker/service/lib/issueMapper.js'

async function getIssueList ({ keys }) {
  const result = await axios.post(
    `${baseUrl}/issues/_search?expand=transitions`,
    { keys },
    {
      headers
    }
  )
  const issueList = result.data?.reduce((acc, item) => {
    const id = item.id
    acc[id] = item
    return acc
  }, {})
  for (const issue of Object.values(issueList)) {
    issueList[issue.id].workLogs = await getIssueWorklogById(issue.id)
  }
  return Object.values(issueList).map(mapIssueFromYandexTracker)
}

export {
  getIssueList
}