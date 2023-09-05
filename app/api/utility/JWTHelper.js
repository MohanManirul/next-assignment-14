// import {SignJWT , jwtVerify} from 'jose';

const { SignJWT, jwtVerify } = require("jose");


export async function CreateToken(otp) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ otp: otp })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);

  return token;
}

export async function verifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET); 
  const decoded = await jwtVerify(token, secret); 
  return decoded["payload"]; 
}
