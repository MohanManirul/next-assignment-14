import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const jsonParams = await req.json();
  let name = jsonParams["name"];
  let email = jsonParams["email"];
  let password = jsonParams["password"];

  if ( email == "") {
    return NextResponse.json({ message: "All fields required." });
  } else {
    const Transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: 'fiforeg@gmail.com',
        pass: 'tbxevmgwoncdiryq',
      },
    });

    let OTP = 112233;
    
    const myEmail = {
      form: "fiforeg@gmail.com",
      to: email,
      subject: "OTP Verification",
      html: '<p>Your OTP Code is : <b>' + OTP + '</b> <br /> Click <a href="http://localhost:3000/otp-login/">here</a> to verify it.</p>'

    };
  
    try {
      await Transporter.sendMail(myEmail);

      const cookieStore = cookies();
      cookieStore.set("email", email, {
        httpOnly: true,
      });

      cookieStore.set("otp", OTP, {
        httpOnly: true,
      });

      return NextResponse.json({
        status: true,
        message: "Successfully Registered"
      });
    } catch (e) {
      return NextResponse.json({ msg: "Fail" });
    }
  }
}
