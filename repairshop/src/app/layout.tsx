import { ThemeProvider } from "@/src/components/theme-provider";
import type { Metadata } from "next";
import Header from "@/src/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "%s | Repair Shop",
    template: "Repair Shop",
  },
  description: "Owner : Sarraf",
  applicationName: "CPU Repair Shop"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[url('/images/home-img.jpg')] bg-cover bg-center ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
