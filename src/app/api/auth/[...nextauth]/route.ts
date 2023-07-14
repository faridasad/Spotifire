import NextAuth from "next-auth/next";
import { options } from "./options";

const handler = NextAuth(options);

export { handler as GET, handler as POST };

/* import NextAuth from "next-auth/next";
import { AUTH_URL } from "../../../../lib/spotify";

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: AUTH_URL
    }),
  ],
  secret: process.env.JWT_SECRET
});
 */
