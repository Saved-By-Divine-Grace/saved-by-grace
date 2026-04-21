import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, department, branch } = body

    if (!name || !phone || !email || !department) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: "SBDG Website <hello@savedbydivinegrace.org>",
      // to: "sbdgm01@gmail.com",
      to: "aremu0235@gmail.com",
      subject: `New Membership Request — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <div style="border-left: 4px solid #E30000; padding-left: 16px; margin-bottom: 32px;">
            <h1 style="font-size: 24px; font-weight: 800; color: #111; margin: 0 0 4px;">
              New Membership Request
            </h1>
            <p style="font-size: 13px; color: #888; margin: 0;">
              Submitted via savedbydivinegrace.org
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; width: 140px;">
                Full Name
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; font-weight: 600; color: #111;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                Phone
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; font-weight: 600; color: #111;">
                ${phone}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                Email
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; font-weight: 600; color: #111;">
                <a href="mailto:${email}" style="color: #E30000;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                Department
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; font-weight: 600; color: #111;">
                ${department}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                Branch
              </td>
              <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #111;">
                ${branch || "Not specified"}
              </td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #fff5f5; border-radius: 4px;">
            <p style="font-size: 13px; color: #888; margin: 0;">
              Please follow up with this person as soon as possible.
              Reply directly to their email: <strong>${email}</strong>
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Join form error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}