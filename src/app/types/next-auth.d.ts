import { DefaultUser } from "next-auth";
declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      accessToken?: string | null;
      accountId?: string | null;
    };
  }
  interface User extends DefaultUser {
    accessToken?: string | null;
    accountId?: string | null;
  }
}
