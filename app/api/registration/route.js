import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { TokenCookie } from "../utility/TokenCookie";

export async function POST(req, res) {
  const JsonBody = await req.json();

  let email = JsonBody["email"];
  if (email === "fiforeg@gmail.com" && password === "123456") {
    let Cookie = await TokenCookie(email);
    return NextResponse.json(
      {
        status: true,
        message: "Login Success",
      },
      {
        status: 200,
        headers: Cookie,
      }
    );
  } else {
    return NextResponse.json({
      status: false,
      message: "Login Fail",
    });
  }
}
