import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      //new URL("https://ejrhibnoyrzaltq7.public.blob.vercel-storage.com"),
      new URL("https://kwsmytvlexajttczjril.storage.supabase.co/storage/v1/s3"),
    ],
  },
};

export default withPayload(nextConfig);
