// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, jobRequisitions, sourcingCandidates, whatsappConsent } = req.body;

        // Log the request body for debugging purposes
       // console.log(req.body);

        // Email account credentials
        const emailAddress = process.env.SMTP_USER;
        const emailPassword = process.env.SMTP_PASS;

        // Email server details
        const smtpServer = 'smtpout.secureserver.net';
        const smtpPort = 465;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: smtpServer,
            port: smtpPort,
            secure: true, // true for 465, false for other ports
            auth: {
                user: emailAddress,
                pass: emailPassword,
            },
        });

        // Construct the subject and message
        const subject = 'Demo Request Confirmation';
        const message = `Hello ${name},

Thank you for registering for our demo.

Details:
- Job Requisitions: ${jobRequisitions.label}
- Sourcing Candidates: ${sourcingCandidates.label}
- WhatsApp Consent: ${whatsappConsent ? 'Yes' : 'No'}

Best regards,
SmartGrader Team`;

        // Email options
        const mailOptions = {
            from: emailAddress, // Ensure this is set to your email address
            to: email,
            subject: subject,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
