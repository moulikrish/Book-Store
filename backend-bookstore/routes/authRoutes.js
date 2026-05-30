const express = require('express');
const { registerUser, authUser } = require('../controllers/authController');

const router = express.Router();

// Register
router.post('/register', registerUser);

// login
router.post('/login', authUser);

router.get("/test", (req, res) => {
  res.send("Auth route working");
});

module.exports = router;
