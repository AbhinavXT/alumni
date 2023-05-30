import express from 'express'
import { check, validationResult } from 'express-validator'
import Career from '../../models/careerModel'

const router = express.Router();

// @route GET api/career
// @desc get all career posts
// @access Public
router.get('/', (req, res) => res.send('Career GET route'))


// @route POST api/career
// @desc get all career posts
// @access Private only to users
router.post('/',[
    check('owner', 'owner required').not().isEmpty(),
    check('job', 'job required').not().isEmpty(),
    check('company', 'company required').not().isEmpty(),
    check('salary', 'salary required').not().isEmpty(),
    check('link', 'link required').not().isEmpty(),
] ,async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { owner, title, company, location, deadline, salary, type, link } = req.body;
    
        const form = new Career({ owner, title, company, location, deadline, salary, type, link});
    
        await form.save();
    
        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (err) {
        console.error('Failed to save form data', err);
        res.status(500).json({ message: 'An error occurred while saving form data' });
    }
})

export default router