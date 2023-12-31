import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: any) {
    try {
        const formData = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            }
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            subject: "Aplicación de usuario a Puesto",
            html: `
                <h3>Un usuario ha aplicado a un puesto de trabajo:</h3>
                <br>
                <p>De: ${formData.user.name}</p>
                <br>
                <p>Email: ${formData.user.email}</p>
                <br>
                <p>Teléfono: ${formData.user.phone}</p>
                <br>
                <p>Puesto: ${formData.application.name}</p>
                <br>
                <p>Currículum: ${formData.user.cv}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}