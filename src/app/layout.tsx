import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/utils/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Lilia Martinez - Portfolio",
  description: "This is the portfolio of Lilia Martinez, a Project Manager.",
  keywords: ["Lilia Martinez", "Portfolio", "Project Manager", "Project Coordinator"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grid-col-1 min-h-svh relative antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <div className="z-0 pt-22 min-h-screen dark:text-white text-black">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
