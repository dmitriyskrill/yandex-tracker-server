import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration.js'

dayjs.extend(duration)

function calculateHoursFromDuration (data) {
  if (!data) return 0
  const duration = dayjs.duration(data)
  const days = duration?.$d?.days || 0
  const hours = duration?.$d?.hours || 0
  const minutes = duration?.$d?.minutes || 0
  return Math.round(days * 8) + hours + Math.round(minutes / 60)
}

export {
  calculateHoursFromDuration
}