import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/lib/provider";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Paul Gomez",
  description:
    "Hello, I'm Paul, an experience Full Stack Engineer specialzing in web development with NextJS and TypeScript. I tinker around making tools for other various fields like Image Optimization, Syntax Analysis and Highlighting and Task Automation and Testing.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${GeistSans.variable} ${GeistMono.variable} w-screen overflow-x-hidden  min-h-screen bg-background  font-sans antialiased`}
        >
          <Provider>
            <div>
              {children}
              <Toaster />
            </div>
          </Provider>
        </body>
      </html>
    </ViewTransitions>
  );
}
