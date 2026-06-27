import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: '', // your email
    pass: '', // the app password you generated, paste without spaces
  },
  secure: true,
  port: 465,
});
(async () => {
  await transporter.sendMail({
    from: '', // your email
    to: '', // the email address you want to send an email to
    subject: '', // The title or subject of the email
    html: '', // I like sending my email as html, you can send \
    // emails as html or as plain text
  });

  console.log('Email sent');
})();
