import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import type { NextApiRequest, NextApiResponse } from "next";

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

const callbacks = {};

const options = {
  providers,
  callbacks,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
