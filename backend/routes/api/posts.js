import express from 'express'
const router = express.Router();

// @route GET api/feed
// @desc get all feed posts
// @access Public
router.get('/', (req, res) => res.send('Post route'))

export default router