import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Cruz Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="size-full" suppressHydrationWarning>
      <body
        className="size-full"
      >
        <Header />
        <div className="size-full">
        {children}
        </div>
      </body>
    </html>
  );
}
