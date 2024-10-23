const express = require('express');
const { registerUser, loginUser, logoutUser, isTokenBlacklisted } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Logout (with token blacklist check)
router.post('/logout', protect, isTokenBlacklisted, logoutUser);

module.exports = router;
