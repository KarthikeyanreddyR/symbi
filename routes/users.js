const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register
router.post('/register', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Failed to register'
            });
        } else {
            res.json({
                success: true,
                msg: 'Registered user'
            });
        }
    })
});

// Authenticate
router.post('/auth', (req, res) => {
    res.send('Auth');
});

// Profile
router.get('/profile', (req, res) => {
    res.send('profile');
});

module.exports = router;