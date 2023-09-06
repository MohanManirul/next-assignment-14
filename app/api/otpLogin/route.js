
 
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { TokenCookie } from "../utility/TokenCookie";

export async function POST(req, res) {
  const JsonBody = await req.json();
  let otp = JsonBody["otp"];

  if (otp === "123" ) {
    let Cookie = await TokenCookie(otp);
    return NextResponse.json(
      {
        status: true,
        message: "Login Success"
      },
      {
        status: 200,
        headers: Cookie,
      }
    );
  } else {
    return NextResponse.json({
      status: false,
      message: "Login Fail"
    });
  }
}

export async function GET(req, res) {
  cookies().delete('token');
  return NextResponse.json({
    status: true,
    message: "Logout Successfull",
  });
}
