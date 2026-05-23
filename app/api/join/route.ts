import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = "https://saved-by-grace-blue.vercel.app/sbdg-logo.png";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, department, branch } = body;

    if (!name || !phone || !email || !department) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "SBDG Website <hello@sbdgministries.org>",
      to: "sbdgm01@gmail.com",
      subject: `New Membership Request — ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Membership Request</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:#ffffff; padding: 40px 32px 24px; text-align:center; border-bottom: 3px solid #E30000;">
            
              <img 
                src="${LOGO_URL}" 
                alt="Saved By Grace Ministry" 
                width="90" 
                height="90"
                style="border-radius:50%; border: 3px solid #f0f0f0; margin-bottom: 16px; display:block; margin-left:auto; margin-right:auto;"
              />
              <h1 style="margin:0 0 4px; font-size:20px; font-weight:800; color:#111111; letter-spacing:1px;">
                Saved By Divine Grace Of God Ministry
              </h1>
              <p style="margin:0; font-size:12px; color:#aaaaaa; letter-spacing:2px; text-transform:uppercase;">
                sbdgministries.org
              </p>
            </td>
          </tr>

          <!-- TITLE SECTION -->
          <tr>
            <td style="padding: 36px 40px 24px; text-align:center; border-bottom: 1px solid #f0f0f0;">
              <div style="display:inline-block; background:#fff5f5; border: 1px solid #ffd0d0; border-radius:100px; padding: 6px 18px; margin-bottom:16px;">
                <span style="font-size:12px; font-weight:700; color:#E30000; text-transform:uppercase; letter-spacing:1.5px;">New Submission</span>
              </div>
              <h2 style="margin:0 0 8px; font-size:24px; font-weight:800; color:#111111;">
                New Membership Request
              </h2>
              <p style="margin:0; font-size:14px; color:#888888;">
                Someone just filled the Join Us form on the website. Here are their details below.
              </p>
            </td>
          </tr>

          <!-- DETAILS TABLE -->
          <tr>
            <td style="padding: 32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #f0f0f0;">
                    <p style="margin:0 0 4px; font-size:11px; font-weight:700; color:#aaaaaa; text-transform:uppercase; letter-spacing:1.5px;">Full Name</p>
                    <p style="margin:0; font-size:17px; font-weight:700; color:#111111;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #f0f0f0;">
                    <p style="margin:0 0 4px; font-size:11px; font-weight:700; color:#aaaaaa; text-transform:uppercase; letter-spacing:1.5px;">Phone Number</p>
                    <p style="margin:0; font-size:17px; font-weight:700; color:#111111;">${phone}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #f0f0f0;">
                    <p style="margin:0 0 4px; font-size:11px; font-weight:700; color:#aaaaaa; text-transform:uppercase; letter-spacing:1.5px;">Email Address</p>
                    <p style="margin:0; font-size:17px; font-weight:700;">
                      <a href="mailto:${email}" style="color:#E30000; text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #f0f0f0;">
                    <p style="margin:0 0 4px; font-size:11px; font-weight:700; color:#aaaaaa; text-transform:uppercase; letter-spacing:1.5px;">Department Interest</p>
                    <p style="margin:0;">
                      <span style="display:inline-block; background:#fff5f5; color:#E30000; font-size:14px; font-weight:700; padding: 6px 14px; border-radius:100px; border: 1px solid #ffd0d0;">
                        ${department}
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0;">
                    <p style="margin:0 0 4px; font-size:11px; font-weight:700; color:#aaaaaa; text-transform:uppercase; letter-spacing:1.5px;">Branch</p>
                    <p style="margin:0; font-size:17px; font-weight:700; color:#111111;">${branch || "Not specified"}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#fafafa; padding: 24px 40px; text-align:center; border-top: 3px solid #E30000;">
              <p style="margin:0 0 4px; font-size:13px; font-weight:700; color:#333333;">Saved By Grace Ministry</p>
              <p style="margin:0; font-size:12px; color:#aaaaaa;">
                This email was sent automatically from the SBDG website membership form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Join form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
