import { calculateHoursFromDuration } from '../lib/calculateHoursFromDuration.js'

function mapIssueFromYandexTracker (issue) {
  return {
    ...issue,
    //@ts-ignore
    spentHours: calculateHoursFromDuration(issue.spent),
    estimationHours: calculateHoursFromDuration(issue.estimation),
    originalEstimationHours: calculateHoursFromDuration(issue.originalEstimation),
  }

}


export { mapIssueFromYandexTracker }