import express from 'express'
const router = express.Router();

// @route GET api/profile
// @desc get user profile
// @access Public
router.get('/', (req, res) => res.send('Profile route'))

export default router