

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const path = require('path'); // Added for serving React files

// Load environment variables
dotenv.config();

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
mongoose.connect(process.env.LocalDb)
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });

// Cloudinary configuration
cloudinary.config({
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
});

// Serve static files from the 'build' folder (React app)
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes
const AuthRouter = require('./Routes/AuthRoutes');
const PerfsRoute = require('./Routes/PerfsRoute');
const CartsRouter = require('./Routes/CartRoutes');
const { log } = require('console');

app.use('/api/auth', AuthRouter);
app.use('/api/perfumes', PerfsRoute);
app.use('/api/cart', CartsRouter);

// Handle other requests (e.g., React Router routes)


// For any other route, serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`);
    log(__dirname)
});
