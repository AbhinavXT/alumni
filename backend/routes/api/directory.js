import express from 'express'
const router = express.Router();

// @route GET api/directory
// @desc get all users
// @access Public
router.get('/', (req, res) => res.send('User route'))

export default router