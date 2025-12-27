import { Router } from "express";

const router = Router()

router.post('/register', (req, res) => {
    res.status(201).json({ message: 'User Signed up successfully' })
})

router.post('/login', (req, res) => {
    res.status(201).json({ message: 'user logged in successfully' })
})

export default router;