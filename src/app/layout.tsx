import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./components/Provider";
import ToasterContext from "./components/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppliTrack",
  description: "track your job apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ToasterContext />
          <div>{children}</div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
