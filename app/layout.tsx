import type { Metadata } from "next";
import "@/assets/globals.css";

// metadata
export const metadata : Metadata  = {
  title:'Home Page',
  description: 'Home Page agency website UI',
}

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
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
