import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req , res){

    const {searchParams} = new URL(req.url);
    let ToEmail = searchParams.get('email');

    //smtp Transporter 
    let Transporter = nodemailer.createTransport({
        host : 'mail.teamrabbil.com',
        port : 25,
        secure : false,
        auth : {
            user : 'info@teamrabbil.com',
            pass:'~sR4[bhaC[Qs'
        },
        tls:{rejectUnauthorized: false}
    }) 

    // Prepare email
    let myEmail = {
        from : "Test email from next js application <info@teamrabbil.com>",
        to : ToEmail,
        subject : "test email from next js application",
        text : "test email from next js application"
    }
    try{
       await Transporter.sendMail(myEmail);
      return  NextResponse.json({msg: "Email Sending Success"});
    }catch(e){
      return  NextResponse.json({msg: "Email Sending Fail"});
    }
}