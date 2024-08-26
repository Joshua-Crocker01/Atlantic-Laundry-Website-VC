const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

// REMOVE : obviously dont have account and password in the live version, hide them away somewhere
const user = 'q-tuck-testing@outlook.com';
const pass = 'Qtucktestingpassword1';

// CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'outlook', // Use your email service provider
    auth: {
        user: user, // Your email address
        pass: pass, // Your email password
    },
});

app.post('/send-email', (req, res) => {
    const { firstName, lastName, email, phone, businessName, message } = req.body;

    const mailOptions = {
        from: user,
        to: 'Jcrocker@haroldsnow.ca', // Destination email address
        subject: 'New Contact Form Submission',
        text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            Business Name: ${businessName || 'N/A'}
            Message: ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send('Error sending email');
            console.error(error);
        } else {
            res.status(200).send('Email sent: ' + info.response);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
