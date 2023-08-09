import { DefaultUser, DefaultSession } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: DefaultUser & {
      accessToken?: string;
      refreshToken?: string;
      accountId?: string;
    };
  }
  interface User extends DefaultUser {
    accessToken?: string;
    refreshToken?: string;
  }
}


declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken: string,
    refreshToken: string,
    accountId: string,
    accessTokenExpiresAt: number;
  }
}