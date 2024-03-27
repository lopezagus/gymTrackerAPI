import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
	res.send('Fetching exercises')
})

router.post('/', (_req, res) => {
	res.send('Creating exercise')
})

const test: number[] = []
console.log(test)

export default router
