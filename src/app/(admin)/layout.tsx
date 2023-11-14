import React from 'react'
import AdminSidebar from './_sidebar'
import "@/styles/globals.css";
import type { Metadata } from "next";
import { NextProvider } from '@/components/NextProvider';
import { AuthProvider } from '@/contexts/authContext';
import { ThemeProvider } from '@/contexts/themeContext';


export const metadata: Metadata = {
  title: "Brand Chunk is an Ecommerce Application",
  description: "Ecommerce application to by branded and assured products",
};

const AdminLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
      <html lang="en" className="dark">
        <body className="bg-white dark:bg-gray-800 font-sans leading-normal tracking-normal">
          <AuthProvider>
            <NextProvider>
              <ThemeProvider>
                <div className="flex flex-wrap bg-gray-100 w-full h-screen">
                  <AdminSidebar />
                  <div className="w-9/12">
                    <div className="p-4 text-gray-500">{children}</div>
                  </div>
                </div>
              </ThemeProvider>
            </NextProvider>
          </AuthProvider>
        </body>
      </html>
  );
}

export default AdminLayout