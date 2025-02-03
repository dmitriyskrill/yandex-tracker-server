import { headers, baseUrl } from '../lib/constants.js'
import axios from 'axios'
import { mapIssueWorklogFromYandexTracker } from '../lib/issueWorklogMapper.js'

async function getIssueWorklogById (issueId) {
  const result = await axios.get(
    `${baseUrl}/issues/${issueId}/worklog`,
    {
      headers
    })
  return result.data.map(mapIssueWorklogFromYandexTracker)
}

export { getIssueWorklogById }