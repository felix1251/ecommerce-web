import { Provider as ReduxProvider } from "@/providers/redux";
import { Provider as ToastProvider } from "@/providers/toast";
import { MainLayout } from "@/templates";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage | Home",
  description: "Shop now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>
        <ReduxProvider>
          <ToastProvider>
            <MainLayout>{children}</MainLayout>
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
