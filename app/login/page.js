"use client"

import { useRouter } from 'next/navigation';
import { useState } from "react";

const Page = () => {

const [formValue , setFormvalue] = useState({email:'fiforeg@gmail.com', password : '123456'})
const router = useRouter();

const inputChange = (name,value) => {
    setFormvalue(formValue =>(
        {
            ...formValue,
            [name]:value
        }
    ))
}


    const Submit = async (e) => {
        console.log(JSON.stringify(formValue))
        // console.log(formValue.email)
        // console.log(formValue.password)
        e.preventDefault();
        if(formValue.email.length === 0){
            alert('Email Required')
        }else if(formValue.password.length === 0){
            alert('Password Required')
        }else{
            const config = {method:'POST', body:JSON.stringify(formValue)}
            // console.log(config)
            const response = await fetch("/api/login",config)        
            const json = await response.json();  // problem here ... return status false
            // console.log(json);
            if(json['status'] === true){
                router.replace('/dashboard')
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
                    <label className="form-label mt-3">User Password</label>
                    <input className="form-control" value={formValue.password} onChange={(e)=>inputChange('password',e.target.value)} type="password" placeholder="XXXXXXX"/>
                    <input className="btn btn-primary mt-3" type="submit" value="Login" />
                </form>
                <input className="btn btn-dark mt-3" type="submit" value="Login With Github" /> &nbsp;
                <input className="btn btn-success mt-3" type="submit" value="Login With Facebook" />&nbsp;
                <input className="btn btn-danger mt-3" type="submit" value="Login With Google" />&nbsp;
                <input className="btn btn-warning mt-3" type="submit" value="Login With Linkedin" />
            </div>
        </div>
    </div>
    );
};

export default Page;