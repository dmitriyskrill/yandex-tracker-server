import { calculateHoursFromDuration } from '../lib/calculateHoursFromDuration.js'


function mapIssueWorklogFromYandexTracker (worklog) {
  return {
    ...worklog,
    durationHours: calculateHoursFromDuration(worklog.duration)
  }
}

export {
  mapIssueWorklogFromYandexTracker
}