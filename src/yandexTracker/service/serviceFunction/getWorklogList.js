import { headers, baseUrl } from '../lib/constants.js'
import axios from 'axios'
import { getIssueListAll } from './getIssueListAll.js'
import { mapIssueWorklogFromYandexTracker } from '#yandexTracker/service/lib/issueWorklogMapper.js'

async function getWorklogList ({ issueIdList }) {
  const worklogList = []

  if (!Array.isArray(issueIdList) || issueIdList.length === 0) {
    issueIdList = (await getIssueListAll()).map(el => el.id)
  }
  console.log(issueIdList)
  for(let issueId of issueIdList){
    worklogList.push(...(await axios.get(
      `${baseUrl}/issues/${issueId}/worklog`,
      {
        headers
      })).data)
  }
  return worklogList.map(mapIssueWorklogFromYandexTracker)
}

export { getWorklogList }