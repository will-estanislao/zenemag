import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://ejrhibnoyrzaltq7.public.blob.vercel-storage.com"),
    ],
  },
};

export default withPayload(nextConfig);
