import { NextProvider } from '@/components/NextProvider'
import Toast from '@/components/Toast'
import Footer from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { AuthProvider } from '@/contexts/authContext'
import { ThemeProvider } from '@/contexts/themeContext'
import React from 'react'
import "@/styles/globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Brand Chunk is an Ecommerce Application",
  description: "Ecommerce application to by branded and assured products",
};

const UserLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <html lang="en" className='dark'>
      <body className="bg-white dark:bg-gray-800 font-sans leading-normal tracking-normal">
      <AuthProvider>
    <NextProvider>
      <ThemeProvider>
          <Header />
          <Toast />
          <main className="bg-white flex flex-col items-center justify-between p-0">
          {children}
          </main>
          <Footer />
      </ThemeProvider>
    </NextProvider>
    </AuthProvider>
      </body>
    </html>

  )
}

export default UserLayout