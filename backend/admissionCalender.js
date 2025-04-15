// server.js
import express from 'express';
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());

// Sample data for admission events
const admissionEvents = [
    {
        id: 1,
        title: 'IIT Admission 2025',
        description: 'Application start and deadline for IIT admissions.',
        startDate: '2025-03-01',
        endDate: '2025-03-31',
        link: 'https://iitadmissions.example.com'
    },
    {
        id: 2,
        title: 'College Entrance Exam',
        description: 'Exam dates and registration for college entrance.',
        startDate: '2025-04-10',
        endDate: '2025-04-15',
        link: 'https://collegeexam.example.com'
    },
    // Add more events as needed...
];

// Endpoint to fetch admission events
app.get('/api/events', (req, res) => {
    res.json(admissionEvents);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
