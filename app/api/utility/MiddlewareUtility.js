import { NextResponse } from "next/server";
import { verifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req){
    try{
        let token = req.cookies.get('token'); // get the token named cookie
        console.log(token);
        let payload = await verifyToken(token['value']) // decript the cookie as plain text (original email)
        console.log(payload['email'])
        const requestHeaders = new Headers(req.headers) // verify the req.headers (token) regularly
        requestHeaders.set('email',payload['email']) // set the payload['email'] at header
        // allow to go to controller
        return NextResponse.next({
            request:{headers:requestHeaders},
        })
    }catch(e){
        return NextResponse.redirect(new URL('/login',req.url)) // if not verified then deny to go to controller redirect to /login url
    }
}