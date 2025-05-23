import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vision-3d",
  description: "Generated by create next app",
  icons: {
    icon: "/logo/lastestlogo.svg", // Updated path for the favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
       {children}{/* Ensure this is the overall root layout wrapper */}
      </body>
    </html>
  );
}
