import { Space_Mono, Work_Sans } from "next/font/google";

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
});

export const workSansBold = Work_Sans({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-work-semiBold",
});
export const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-work",
});
