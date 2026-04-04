import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, service, message } = body as {
      name: string;
      phone: string;
      service: string;
      message: string;
    };

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Premier Deck & Porch Website" <${process.env.GMAIL_USER}>`,
      to: "premierdeckandporch@gmail.com",
      subject: `New Estimate Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3d12;">New Estimate Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Service</td><td style="padding: 8px;">${service || "Not specified"}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold; color: #555;">Message</td><td style="padding: 8px;">${message || "—"}</td></tr>
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 12px;">Sent from the contact form at premierdeckandporch.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
