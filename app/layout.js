import  Navbar from "@/components/Navbar";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs with Mongodb",
  description: "Created by Quica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        <main className="container mx-auto p-4 mt-8">{children}</main>
      </body>
    </html>
  );
}
