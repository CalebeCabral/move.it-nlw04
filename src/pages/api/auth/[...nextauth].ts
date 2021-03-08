import type { NextApiHandler } from "next";

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

const pages = {
  signIn: "/login",
};

const options = {
  providers,
  pages,
};

const apiHandler: NextApiHandler = (req, res): Promise<void> =>
  NextAuth(req, res, options);
export default apiHandler;
