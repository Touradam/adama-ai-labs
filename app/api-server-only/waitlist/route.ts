import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, objective } = await request.json();

    // Validate input
    if (!name || !email || !objective) {
      return NextResponse.json(
        { error: "Name, email, and objective are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const adminEmail = process.env.ADMIN_EMAIL || "touradam3@gmail.com";

    try {
      // Send notification email to admin
      await resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: "🎉 New Waitlist Signup - Adama AI Lab",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14B8A6;">New Waitlist Signup!</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="background-color: #F0FDFA; border-left: 4px solid #14B8A6; padding: 20px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #14B8A6;">Main Objective:</strong></p>
              <p style="margin: 0; color: #333; line-height: 1.6;">${objective}</p>
            </div>
            <p style="color: #666; font-size: 14px;">This person has joined the waitlist for the 2-weekend AI education program.</p>
          </div>
        `,
      });

      // Send confirmation email to user
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Welcome to Adama AI Lab Waitlist! 🚀",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #14B8A6;">Welcome to Adama AI Lab!</h1>
            
            <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for joining the <strong>Adama AI Lab</strong> waitlist! 
            </p>
            
            <div style="background-color: #F0FDFA; border-left: 4px solid #14B8A6; padding: 20px; margin: 20px 0;">
              <p style="margin: 0; font-size: 18px; color: #14B8A6; font-weight: bold;">
                🎉 First Bootcamp is FREE!
              </p>
              <p style="margin: 10px 0 0 0; color: #666;">
                Week 1 (Friday-Saturday-Sunday) is completely free for waitlist members.
              </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6;">
              We're excited to have you interested in our 2-weekend AI education program. 
              You'll receive an email with the course link if you're accepted.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #000;">What's Next?</h3>
              <ul style="line-height: 1.8;">
                <li>We'll review your application</li>
                <li>You'll receive an acceptance email with the course link</li>
                <li>Join us for the first bootcamp (Week 1) - completely FREE!</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6;">
              <strong>Remember our core principles:</strong><br/>
              • Understand the machine before you trust it<br/>
              • Use AI. Don't let it use you<br/>
              • Understand AI. Build tools. Keep control
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Best regards,<br/>
              <strong>Adama AI Lab Team</strong>
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;" />
            
            <p style="font-size: 12px; color: #999; line-height: 1.6;">
              Questions? Reply to this email or contact us at ${adminEmail}
            </p>
          </div>
        `,
      });

      return NextResponse.json(
        { 
          success: true, 
          message: "Successfully joined the waitlist" 
        },
        { status: 200 }
      );

    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      
      // Return success to user even if email fails (don't block signup)
      // But log the error for admin to investigate
      return NextResponse.json(
        { 
          success: true, 
          message: "Successfully joined the waitlist" 
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error("Error processing waitlist signup:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
