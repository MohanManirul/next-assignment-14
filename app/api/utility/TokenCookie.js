// sets the cookie for entire application

import { CreateToken } from "./JWTHelper";

export async function TokenCookie(email) {
  let token = await CreateToken(email);

  let newToken = {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; SameSite:Strict; Path=/`,
  };
  return newToken;
}

/*

 Set-Cookie : the key for setting the cookie
 token : the name of cookie , which is shown at browser
 Max-Age : alive time on browser
 Secure : token will be secure
 Path=/ : cookie will work entire the application
 SameSite=Strict : csrf protection , cross site attack protection for this cookie

 */
