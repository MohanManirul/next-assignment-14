"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const Logout = async () => {
        let res = await axios.get("api/otpLogin");
       
        if(res.data.status === true ){
            router.replace('/otp-login');
        }
    }

    return (
        <div className="row">
            <p className="text-center">Welcome to dashboard</p>
            <button className="btn btn-danger smallButton float-right" onClick={Logout}>Logout</button>
        </div>
    );
};

export default Page;