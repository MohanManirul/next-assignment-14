import { NextResponse } from "next/server";
import { TokenCookie } from "../utility/TokenCookie";
import { cookies } from "next/headers";

export async function POST(req ,res){
    const JsonBody = await req.json();

    let email = JsonBody['email'];
    console.log(email);
    let password = JsonBody['password'];

    if('email' === 'fiforeg@gmail.com' && password === '123456'){
        let Cookie =  await TokenCookie(email);
        return NextResponse.json(
            {
                status : true,
                message : 'Login Success'
            },
            {
                status : 200,
                headers : Cookie

            }
        )
    }else{
        return NextResponse.json(
            {
                status : false,
                message : 'Login Fail' 
            }
            )
    }
}

export async function GET(req,res){
    cookies().delete('token');
    return NextResponse.json(
        {
            status: true,
            message : "Logout Successfull"
        }
    )
}