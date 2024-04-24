import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/lib/provider";
import { Link, ViewTransitions } from "next-view-transitions";
import TextHeader from "./_components/section-text-header";
import About from "./_components/section-about";
import AvatarSocials from "./_components/section-avatar-socials";
import Skills from "./_components/section-skills";
import BreadCrumb from "./_components/section-breadcrumb";
import { headers } from "next/headers";

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
      <html lang="en" className="scroll-smooth">
        <body
          className={`${GeistSans.variable} ${GeistMono.variable} w-screen overflow-x-hidden  min-h-screen bg-background dark:bg-background font-sans antialiased`}
        >
          <Provider>
            <div
              className="container md:max-w-[50rem]
 w-full mx-auto max-w-none antialiased mb-10"
            >
              <div className="md:p-0 p-8 pt-4 md:pt-0 space-y-5">
                <div className="text-center dark:text-muted-foreground text-primary p-5  py-20">
                  <TextHeader />
                </div>
                <div className="flex flex-col gap-4">
                  <AvatarSocials />
                  <About />
                  <Skills />
                  <BreadCrumb />
                  {children}
                  <Toaster />
                </div>
              </div>
            </div>
          </Provider>
        </body>
      </html>
    </ViewTransitions>
  );
}
