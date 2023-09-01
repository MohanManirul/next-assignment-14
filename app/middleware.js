import { NextResponse } from "next/server";
import { CheckCookieAuth } from "./api/utility/MiddlewareUtility";

export async function middleware(req){
    if(req.nextUrl.pathname.startWith('/dashboard')){
        console.log('Hello');
        return await CheckCookieAuth(req)

    }
}

