// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import the nodemailer package for sending emails
const nodemailer = require('nodemailer');

// Create the Express application
const app = express();
const port = 3000;

// Middleware to enable CORS for your Angular app
app.use(cors());

// Middleware to parse JSON bodies from incoming requests
app.use(bodyParser.json());

// A simple GET route for the root URL to confirm the server is running
app.get('/', (req, res) => {
  res.send('Your backend server is running and ready to receive form data!');
});

// Create a Nodemailer transporter object with your iCloud email service credentials.
// ⚠️ IMPORTANT: You MUST use an app-specific password from your Apple ID, not your main password.
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.me.com',
  port: 587,
  secure: false,
  auth: {
    user: 'lupoin2023@icloud.com', // ✅ Your iCloud email address
    pass: 'bexc-mnyb-mwlw-ggca' // ⚠️ Add your app-specific password here
  }
});

// The POST route to handle form submissions from your Angular app
app.post('/api/submit-form', (req, res) => {
  // Get the form data from the request body
  const formData = req.body;

  // Log the received data to the console for verification during development
  console.log('Received form data:', formData);

  // Define the email's content and recipient
  const mailOptions = {
    from: 'lupoin2023@icloud.com', // ✅ Your iCloud email address
    to: 'lupoin2023@icloud.com', // ✅ The form will be sent to this email address
    subject: `New Form Submission from ${formData.firstName} ${formData.lastName}`,
    html: `
      <h2>New Form Submission</h2>
      <p><b>Company:</b> ${formData.company || 'N/A'}</p>
      <p><b>Name:</b> ${formData.firstName} ${formData.lastName}</p>
      <p><b>Address:</b> ${formData.address}, ${formData.address2 || ''}</p>
      <p><b>City:</b> ${formData.city}</p>
      <p><b>State:</b> ${formData.state}</p>
      <p><b>Postal Code:</b> ${formData.postalCode}</p>
      <p><b>Shipping Option:</b> ${formData.shipping}</p>
    `
  };

  // Send the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent successfully! Response:', info.response);
      res.status(200).json({ message: 'Form data received and email sent successfully!' });
    }
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Verify the Nodemailer connection to the SMTP server
  transporter.verify(function (error, success) {
    if (error) {
      console.error('SMTP server verification failed:', error);
    } else {
      console.log('SMTP server is ready to take messages.');
    }
  });
  console.log(`Local backend server listening at http://localhost:${port}`);
});
