"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

const Page = () => {
  let router = useRouter();
  let emailRef,
    passwordRef = useRef();

  const Submit = async (e) => {
    e.preventDefault();
    let email = emailRef.value;
    let password = passwordRef.value;

    let res = await axios.post("api/login", { email, password });
    if (res.data.status === true) {
      router.replace("/otp");
      alert("true");
    } else {
      alert("false");
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
            <label className="form-label mt-3">User Password</label>
            <input
              className="form-control"
              ref={(input) => (passwordRef = input)}
              type="password"
              placeholder="XXXXXXX"
            />
            <input
              className="btn btn-primary mt-3"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
