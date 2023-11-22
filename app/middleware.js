import { NextResponse } from "next/server";
import { CheckCookieAuth } from "./api/utility/MiddlewareUtility";

export async function middleware(req){
    if(req.nextUrl.pathname.startsWith('/dashboard')){
        return  CheckCookieAuth(req);
    }

}

