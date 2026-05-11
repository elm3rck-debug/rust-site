import NextAuth from "next-auth";
import SteamProvider from "next-auth/providers/steam";

const handler = NextAuth({
  providers: [
    SteamProvider({
      clientSecret: process.env.STEAM_API_KEY!,
      callbackUrl:
        "https://rust-site.pages.dev/api/auth/callback/steam",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };