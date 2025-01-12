const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmailNotification = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => {
        const data = snap.data();
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-app-specific-password'
            }
        });

        const mailOptions = {
            from: 'TikTok Rescue <your-email@gmail.com>',
            to: 'projects@webally.co.za.com',
            subject: `New Contact Form Message from ${data.name}`,
            text: `
                Name: ${data.name}
                Email: ${data.email}
                Message: ${data.message}
                Time: ${data.timestamp}
            `
        };

        return transporter.sendMail(mailOptions);
    });
