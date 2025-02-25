import * as service from '#yandexTracker/service/index.js'

async function getMyself (req, res) {
  try {
    res.status(200).json(await service.myself())
  } catch (error) {
    res.status(500).json({
      message: error.message, stack: error.stack, name: error.name
    })
  }
}

async function getIssueList (req, res) {

  try {
    const { keys } = req.query
    res.status(200).json(await service.getIssueList({ keys }))
  } catch (error) {
    console.log(error.message, error.stack)
    res.status(500).json({
      message: error.message, stack: error.stack, name: error.name
    })
  }
}

async function getIssueWorklogById  (req, res)  {

  try {
    const { issueId } = req.params
    res.status(200).json(await service.getIssueWorklogById(issueId))
  } catch (error) {
    console.log(error.message, error.stack)
    res.status(500).json({
      message: error.message, stack: error.stack, name: error.name
    })
  }
}
async function getIssueById (req, res) {

  try {
    const { issueId } = req.params
    res.status(200).json(await service.getIssueById({ issueId }))
  } catch (error) {
    console.log(error.message, error.stack)
    res.status(500).json({
      message: error.message, stack: error.stack, name: error.name
    })
  }
}

async function getWorklogList (req, res) {
  try {
    const { issueId } = req.params
    res.status(200).json(await service.getWorklogList({ issueId }))
  } catch (error) {
    console.log(error.message, error.stack)
    res.status(500).json({
      message: error.message, stack: error.stack, name: error.name
    })
  }
}

export {
  getMyself,
  getIssueList,
  getIssueWorklogById,
  getIssueById,
  getWorklogList
}