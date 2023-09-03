import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedinProvider from "next-auth/providers/linkedin";



export const authOptions = {
    pages:{
        signIn:'/login',
    },
    session :{
        strategy:'jwt',
    },
    secret : process.env.JWT_SECRET,
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),
          FacebookProvider({
            clientId: process.env.GOOGLE_SECRET,
            clientSecret: process.env.FACEBOOK_SECRET
          }),
          LinkedinProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_SECRET
          }),
    ]
}