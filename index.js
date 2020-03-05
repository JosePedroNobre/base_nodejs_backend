const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

// Import Routes
const authRoute = require("./routes/auth");
const groupRoute = require("./routes/group");
const mmovementRoute = require("./routes/movement");

dotenv.config();

// Middleware
app.use(cors())
app.use(express.json());

// Route Middleware
app.use('/api/user', authRoute);
app.use('/api/group', groupRoute);
app.use('/api/movement', mmovementRoute);
app.listen(3000, () => console.log("Running"))