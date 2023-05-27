import express from 'express'
const router = express.Router();

// @route GET api/feed
// @desc get all feed posts
// @access Public
router.get('/', (req, res) => res.send('Posts GET route'))

// @route POST api/feed
// @desc get all feed posts
// @access Public
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posts POST route')
})

export default router