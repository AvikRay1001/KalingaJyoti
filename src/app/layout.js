import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Kj from "@/components/kj/Kj";
import Events from "@/components/MainEvents/Events";

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          <About/>
          <Kj/>
          <Events/>
          {children}
        </div>
      </body>
    </html>
  );
}
