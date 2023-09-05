import { NextResponse } from "next/server";
import { verifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req){
    try{
        let token = req.cookies.get('token'); 
        let payload = await verifyToken(token); 
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('otp', payload['otp']);
        return NextResponse.next({
            request:{headers:requestHeaders},
        })
    }catch(e){
        return NextResponse.redirect(new URL('/otp-login',req.url)) ;
    }
}