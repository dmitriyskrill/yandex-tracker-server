import 'dotenv/config'

const access_token = process.env.YANDEX_TRACKER_GET_ACCESS_TOCKEN
const xCloudOrgId = process.env.YANDEX_TRACKER_X_CLOUD_ORD_ID
const baseUrl = process.env.YANDEX_TRACKER_BASE_URL
const headers = {
  Authorization: `OAuth ${access_token}`,
  'X-Cloud-Org-ID': xCloudOrgId
}

export {
  headers,
  baseUrl
}