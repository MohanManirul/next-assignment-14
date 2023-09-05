// sets the cookie for entire application

import { CreateToken } from "./JWTHelper";

export async function TokenCookie(otp) {
  let token = await CreateToken(otp);

  let newToken = {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly;Path=/ ; SameSite:Strict` };
  return newToken;
}


