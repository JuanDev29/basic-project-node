const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.json("Get all")
})

router.get('/:id', (req, res) => {
  res.json("Get by id")
})

router.post('/', (req, res) => {
  res.json("Create by POST")
})

router.delete('/:id', (req, res) => {
  res.json("Delete by DELETE")
})

router.put('/:id', (req, res) => {
  res.json("Update by PUT")
})

module.exports = router