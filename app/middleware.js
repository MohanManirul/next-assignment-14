import { NextResponse } from "next/server";

export function middleware(req , res){
    if(req.nextUrl.pathname.startWith("api/product/new")){
        const reqHeader = new Headers(req.headers);
        reqHeader.set("Bearer","Authorization");
        return NextResponse.next({
            request:{headers:reqHeader},
        });
    }
}

