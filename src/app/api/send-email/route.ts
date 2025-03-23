import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable")
      return NextResponse.json({ error: "Email service configuration error" }, { status: 500 })
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", 
      to: ["prince.ajuzie@iauoe.edu.ng", "princeajuzie1@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email, 
    })

    if (data.error) {
      console.error("Resend API error:", data.error)
      return NextResponse.json({ error: data.error }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 })
  } catch (error: any) {
    console.error("Email sending failed:", error)
    // Return more specific error information
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message || "Unknown error",
      },
      { status: 500 },
    )
  }
}

