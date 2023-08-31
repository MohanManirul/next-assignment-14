import { NextResponse } from "next/server";

export async function GET(req,res){
    const cookiesData = req.cookies.get("theme");
    return NextResponse.json(
      
        {
            cookiesData: cookiesData
            
        }
   );
}