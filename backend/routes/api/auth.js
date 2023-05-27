import express from 'express'
const router = express.Router();

// @route GET api/auth
// @desc get auth
// @access Private
router.get('/', (req, res) => res.send('Auth route'))

export default router