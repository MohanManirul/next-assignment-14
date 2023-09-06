import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {headers} from "next/headers";


//get request



//post request

export async function POST(req,res){
    return NextResponse.json(
        {},
        {
            status:400,
            headers : {
                'token' : 'XYZ-123',
                'token2' : 'XYZ-123',
                'Set-Cookie' : 'theme = dark',
            }
                
            
        }
   );
}



//put request

export async function PUT(req,res){
   
}


//patch request

export async function PATCH(){
   
}


//delete request

export async function DELETE(){
   
}