import express from 'express'
import User from  '../../models/user.js'
const router = express.Router();

// @route GET api/directory
// @desc get all users
// @access Public
router.get('/', (req, res) => {
    User.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
})

export default router