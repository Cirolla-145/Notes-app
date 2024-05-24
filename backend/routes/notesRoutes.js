import express from 'express'
import { readNotes, writeNotes } from '../controllers/notesController.js'
import protectRoute from '../middleware/protectRoute.js'


const router = express.Router()

router.post('/write',protectRoute,writeNotes)
router.get('/read',protectRoute,readNotes)

export default router