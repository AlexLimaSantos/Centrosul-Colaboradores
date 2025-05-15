import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Centro Sul",
  description: "Aplicação Centro Sul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
