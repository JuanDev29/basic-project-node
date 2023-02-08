const { Router } = require('express')
const router = Router()
const Task = require("../models/Task")

router.get('/', async (req, res) => {
  const tasks = await Task.find()
  return res.json(tasks)
})

router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if(!task) return res.status(404).json("Task not found")
    return res.status(200).json(task)
  } catch (error) {
    return res.status(500).json("Error ObjectId type")
  }
})

router.post('/', async (req, res) => {
  const { title, body } = req.body 
  const newTask = new Task({title, body})
  const savedTask = await newTask.save()
  return res.status(200).json(savedTask)
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    if(!deletedTask) return res.status(404).json("Task not found")
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json("Error ObjectId type")
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!updatedTask) return res.status(404).json("Task not found")
    return res.status(200).json(updatedTask)
  } catch (error) {
    return res.status(500).json("Error ObjectId type")
  }
})

module.exports = router