import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'get all habits' })
})

router.get('/:id', (req, res) => {
    res.json({ message: 'get habit by id' })
})

router.post('/', (req, res) => {
    res.json({ message: 'create a new habit' })
})

router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a habit' })
})

router.post('/:id/complete', (req, res) => {
    res.json({ message: 'complete a habit' }).status(201);
})

export default router;