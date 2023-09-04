"use client"
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const Logout = async () => {
        const res = await fetch('/api/login');
        const json = await res.json();
        if(json['status'] === true ){
            router.replace('/login');
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