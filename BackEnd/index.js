const express = require('express');
const cors = require('cors');
const routes = require('./Routes');
const config = require('./config');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const axios = require('axios');
// Initialize express app
const app = express();
app.get('/proxy-dlnk', async (req, res) => {
  try {
    // Récupère les params depuis la requête frontend
    const { id, type } = req.query;

    // Appelle le serveur tiers
    const response = await axios.get(`https://dlnk.one/e?id=${id}&type=${type}`);

    // Renvoie la réponse brute au frontend
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Erreur proxy:', error.message);
    res.status(500).send('Erreur proxy');
  }
});

// Middleware
app.use(cors({origin: 'http://localhost:3000',
  credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Setup session middleware
app.use(
  session({
    name: 'thrivmind.sid',
    secret: process.env.SESSION_SECRET||"mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // true if using HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);
// Routes
app.use('/api', routes);

// Simple test route
app.get('/', (req, res) => {  
  res.json({ message: 'Welcome to the API' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
