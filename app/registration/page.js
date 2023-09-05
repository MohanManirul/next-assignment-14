"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

const Page = () => {
  let router = useRouter();
  let emailRef = useRef();

  const Submit = async (e) => {
    e.preventDefault();
    let email = emailRef.value;
 
    let res = await axios.post("api/email", { email });
    console.log(res);
    if (1 === 1) {
      router.replace("/otp-login");
      alert("otp send from Registration page");
    } else {
      alert("otp send Failed msg from Registration page");
    }
  };
 
  return (
    <div className="container">
      <div className="row d-flex vh-100 align-content-center justify-content-center login-form-margin">
        <div className="col-5 ">
          <figure>
            <img
              className="Login-Image"
              src="https://img.lovepik.com/element/45007/0204.png_860.png"
            />
          </figure>
        </div>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="col-5 ">
          <form onSubmit={Submit} className="card p-5">
            <label className="form-label">User Email</label>
            <input
              className="form-control"
              ref={(input) => (emailRef = input)}
              type="email"
              placeholder="example@example.com"
            />
            <input
              className="btn btn-primary mt-3"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
