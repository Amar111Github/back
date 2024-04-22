// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose'); // If you're using MongoDB
// const Sequelize = require('sequelize'); // If you're using SQL databases

// Create Express application
const app = express();

// Connect to MongoDB using mongoose
mongoose.connect('mongodb+srv://afrozzeelani:Zeelani123@cluster0.rvkkcii.mongodb.net/kasperinfotech', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// If you're using SQL databases with Sequelize
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mysql' // Or any other SQL dialect
// });

// Test the database connection
// sequelize.authenticate()
//     .then(() => console.log('SQL Database Connected'))
//     .catch(err => console.error('SQL Database Connection Error:', err));

// Define routes or other middleware here...

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
