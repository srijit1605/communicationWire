import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from 'next-auth/react';  

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NewsWire",
  description: "news with credibility",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Header/>
        <main><SessionProvider>{children}</SessionProvider></main>
        <Footer/>
        
        </body>
    </html>
  );
}
