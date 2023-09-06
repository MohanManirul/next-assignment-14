"use client"
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import './assets/style.css'
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <html lang="en"> 
      <body className={inter.className}>  
        <div className="container marginBottom">
            <Navbar />  
            {children}         
        </div> 
          <Footer />    
      </body>
    </html>
  )
}
