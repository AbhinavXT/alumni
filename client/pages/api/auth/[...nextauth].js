import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter"; 

export default NextAuth ({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET
        }),
        // TwitterProvider({
        //     clientId: process.env.TWITTER_CLIENT_ID,
        //     clientSecret: process.env.TWITTER_CLIENT_SECRET
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET
})