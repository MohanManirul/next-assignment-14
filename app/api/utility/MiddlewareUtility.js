import { NextResponse } from "next/server";
import { verifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req){
    try{
        let token = req.cookies.get('token'); // how to see this token ?
        console.log(token);
        let payload = await verifyToken(token['value'])
        console.log(payload['email'])
        const requestHeaders = new Headers(req.headers)
        requestHeaders.set('email',payload['email'])
        return NextResponse.next({
            request:{headers:requestHeaders},
        })
    }catch(e){
        return NextResponse.redirect(new URL('/login',req.url))
    }
}