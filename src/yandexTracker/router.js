import { Router } from 'express'
import { getMyself, getIssueList, getIssueWorklogById, getIssueById, getWorklogList } from '#yandexTracker/controller.js'

const router = Router()

router.get('/myself', getMyself)
router.get('/issues/list', getIssueList)
router.get('/issues/worklog/byIssueId/:issueId', getIssueWorklogById)
router.get('/issues/byIssueId/:issueId', getIssueById)

router.get('/worklog/list', getWorklogList)

export { router }