import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req , res){

    const {searchParams} = new URL(req.url);
    // let ToEmail = 'fiforeg@gmail.com';
    let ToEmail = searchParams.get('email');
    // console.log(ToEmail);


var transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: 'fiforeg@gmail.com',
      pass: 'tbxevmgwoncdiryq',
    },
  });

  let mailOption = {
    from: ToEmail,
    to: ToEmail,
    subject: 'EmailSubject',
    html: `<div>${'EmailText'}</div> <div><p>Name: ${'name'}</p><p>Email: ${'email'}</p> </div> <br/> <b>your otp is : 123 </b>`,
  };

   await transporter.sendMail(mailOption);
}
