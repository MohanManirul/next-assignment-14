"use client"

import { useRouter } from 'next/navigation';
import { useState } from "react";

const Page = () => {

const [formValue , setFormvalue] = useState({email:''})
const router = useRouter();

const inputChange = (name,value) => {
    setFormvalue(formValue =>(
        {
            ...formValue,
            [name]:value
        }
    ))
}


    const Submit = async(e) => {
        e.preventDefault();
        if(formValue.email.length === 0){
            alert('Email Required')
        }else{
            const config = {method:'POST', body:JSON.stringify(formValue)}
            const response = await fetch("/api/email",config);
            const json = await response.json(); 
            if(json['status'] === true){
                router.push('/otp-login?email=${name}')
            }else{
                alert(json['message'])
            }
        }
    }

    return (
        <div className="container">
        <div className="row d-flex vh-100 align-content-center justify-content-center login-form-margin">
            <div className="col-5 ">
                <figure><img className="Login-Image" src="https://img.lovepik.com/element/45007/0204.png_860.png"  /></figure>
            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="col-5 ">
                <form onSubmit={Submit}  className="card p-5">
                    <label className="form-label">User Email</label>
                    <input className="form-control" value={formValue.email} onChange={(e)=>inputChange('email',e.target.value)} type="email" placeholder="example@example.com"/>
                    <input className="btn btn-primary mt-3" type="submit" value="Register" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default Page;