const express = require('express');
const router = express.Router();

const Contact = require('../models/contact')

const { check, validationResult } = require('express-validator');


router.post('/',
    check('name', 'Please enter your name').notEmpty(),
    check('email', 'Please include a email').isEmail(),
    check('message', 'Please leave your message').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ type: 'error', msg: errors.array()[0].msg });
        }

        const { email, name, message } = req.body;
        try {
            const contact = new Contact({
                name,
                email,
                message
            });
            await contact.save();
            res.json({ type: 'success', msg: 'Message has been received!' })

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });


module.exports = router;