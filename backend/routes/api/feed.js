import express from 'express'
import { check, validationResult } from 'express-validator'
import Feed from '../../models/feed.js'

const router = express.Router();

// @route GET api/feed
// @desc get all feed posts
// @access Public
router.get('/', (req, res) => res.send('Posts GET route'))


// @route POST api/feed
// @desc get all feed posts
// @access Private only to admin
router.post('/',[
    check('title', 'title required').not().isEmpty(),
    check('description', 'description required').not().isEmpty(),
] ,async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const newFeed = new Feed({
            title: req.body.title,
            description: req.body.description,
        })

        newFeed.save().then(post => res.json(post));
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Server Error")
    }
})

export default router