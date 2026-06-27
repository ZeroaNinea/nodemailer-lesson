import dotenv from 'dotenv';

dotenv.config();

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: 'smtp.gmail.com',
  auth: {
    user: process.env.SENDER_EMAIL || '',
    pass: process.env.APP_PASSWORD || '',
  },
  secure: true,
  port: 465,
});
try {
  const info = await transporter.sendMail({
    from: process.env.SENDER_EMAIL!,
    to: process.env.RECEIVER_EMAIL!,
    subject: 'Being Silly',
    text: ':3',
    html: `
      <div style="text-align: center; font-size: 50px;">:3</div>
    `,
  });

  console.log(info);
} catch (err) {
  console.error(err);
}
