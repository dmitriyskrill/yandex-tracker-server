import { headers, baseUrl } from '../lib/constants.js'
import axios from 'axios'

async function getIssueById ({ issueId }) {
  const result = await axios.get(
    `${baseUrl}/issues/${issueId}`,
    {
      headers: headers
    })
  return result.data
}

export { getIssueById }