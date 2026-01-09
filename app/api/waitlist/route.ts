import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
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

    // Send notification email to admin
    const adminEmailBody = `
      New Waitlist Signup!
      
      Name: ${name}
      Email: ${email}
      Time: ${new Date().toLocaleString()}
    `;

    // Send confirmation email to user
    const userEmailBody = `
      Hi ${name},
      
      Thank you for joining the Adama AI Lab waitlist!
      
      We're excited to have you interested in our 2-weekend AI education program. You'll receive an email with the course link if you're accepted.
      
      The first session is FREE for waitlist members.
      
      Best regards,
      Adama AI Lab Team
    `;

    // In a real implementation, you would use an email service like Resend, SendGrid, or Nodemailer
    // For now, we'll return success and log the emails
    console.log("=== ADMIN EMAIL ===");
    console.log(`To: touradam3@gmail.com`);
    console.log(adminEmailBody);
    
    console.log("\n=== USER CONFIRMATION EMAIL ===");
    console.log(`To: ${email}`);
    console.log(userEmailBody);

    // TODO: Implement actual email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Adama AI Lab <hello@adamaailab.com>',
    //   to: 'touradam3@gmail.com',
    //   subject: 'New Waitlist Signup',
    //   text: adminEmailBody,
    // });
    // 
    // await resend.emails.send({
    //   from: 'Adama AI Lab <hello@adamaailab.com>',
    //   to: email,
    //   subject: 'Welcome to Adama AI Lab Waitlist',
    //   text: userEmailBody,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully joined the waitlist" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing waitlist signup:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

