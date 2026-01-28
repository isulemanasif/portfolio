import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Move turbopack to root as per Next.js 16 build error suggestion
  // @ts-ignore
  turbopack: {},
};

export default withPWA(nextConfig);
