const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register User
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = await User.create({ username, email, password });

        // Respond with token
        const token = generateToken(user._id);
        res.status(201).json({ token, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Respond with token
        const token = generateToken(user._id);
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Logout User (blacklist token)
const tokenBlacklist = [];

exports.logoutUser = (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(400).json({ message: 'No token provided!' });
    }

    tokenBlacklist.push(token);  // Add token to blacklist
    res.status(200).json({ message: 'Logged out successfully' });
};

// Middleware to check if token is blacklisted
exports.isTokenBlacklisted = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (tokenBlacklist.includes(token)) {
        return res.status(401).json({ message: 'Token is blacklisted, please log in again' });
    }

    next();
};
