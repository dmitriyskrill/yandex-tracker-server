import { Router } from 'express'
import { getMyself, getIssueList, getIssueWorklogById, getIssueById } from '#yandexTracker/controller.js'

const router = Router()

router.get('/myself', getMyself)
router.get('/issues/list', getIssueList)
router.get('/issues/worklog/byIssueId/:issueId', getIssueWorklogById)
router.get('/issues/byIssueId/:issueId', getIssueById)

export { router }