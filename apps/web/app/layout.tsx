import type { Metadata } from "next";
import localFont from "next/font/local";
import "@repo/ui/globals.css"
import TopBar from "@/components/layout/top-bar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-center bg-repeat antialiased`}
        style={{
          backgroundImage: 'url(https://pinkary.com/img/dots.svg)',
          backgroundSize: '550% 550%'
        }}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
