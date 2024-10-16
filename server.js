const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { createObjectCsvWriter } = require('csv-writer');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// CSV Writer setup
const csvWriter = createObjectCsvWriter({
    path: 'attendance.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'timestamp', title: 'Timestamp' }
    ],
    append: true // Ensures that new data is appended to the file
});

// Route to display a simple form to enter a student's name
app.get('/record-attendance', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>Record Attendance</h1>
            <form action="/submit-attendance" method="POST">
                <label for="name">Enter your name: </label>
                <input type="text" id="name" name="name" required>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

// Route to handle attendance submission
app.post('/submit-attendance', express.urlencoded({ extended: true }), async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send('Name is required.');
    }

    // Record the attendance
    const attendanceData = {
        name,
        timestamp: new Date().toISOString()
    };

    try {
        await csvWriter.writeRecords([attendanceData]);
        res.send('Attendance recorded successfully!');
        console.log('Attendance recorded:', attendanceData);
    } catch (error) {
        console.error('Error recording attendance:', error);
        res.status(500).send('Error recording attendance');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
