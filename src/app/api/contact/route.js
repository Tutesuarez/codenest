import { Html } from "next/document";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nombre, email, mensaje } = await req.json();

    if (!nombre || !email || !mensaje) {
      return Response.json({ message: "Todos los campos son obligatorios" }, { status: 400 });
    }

    // Configurar Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Puedes usar otro servicio SMTP
      auth: {
        user: process.env.EMAIL_USER, // Configura en .env.local
        pass: process.env.EMAIL_PASS, // Configura en .env.local
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "suarezmatiasjose@gmail.com",
      subject: `Nuevo mensaje de ${nombre} `,
      Html:`
      <h1>De: ${nombre}</h1>
      <p>${email}</p>
      <p>${mensaje}</p>`,
    //   text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Correo enviado con éxito" }, { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return Response.json({ message: "Error enviando el correo" }, { status: 500 });
  }
}
