// import {SignJWT , jwtVerify} from 'jose';

const { SignJWT, jwtVerify } = require("jose");

// export async function CreateToken(email) {
//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   let token = await new SignJWT({ email: email })
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setIssuer(process.env.JWT_ISSUER)
//     .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
//     .sign(secret);
//   return token; // produce cypher text will be used to produce cookie
// }

export async function CreateToken(email) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);

  return token;
}

export async function verifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET); // collect JWT_SECRET from .env file
  const decoded = await jwtVerify(token, secret); // compare cypher text token with .env's secret key
  return decoded["payload"]; // extract cypher text token as plain text & output is user's entered email
}
