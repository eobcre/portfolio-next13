import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_CODE,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_NODEMAILER,
    to: process.env.NEXT_PUBLIC_NODEMAILER,
    subject: `Message from (${email})`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: 'Success!', status: 200 });
  } catch (err) {
    console.error('Email sending error:', err);
    const errorObject = err as Error;
    return NextResponse.json({
      message: 'Failed!',
      status: 500,
      error: errorObject.message || 'Unknown error',
    });
  }
}
