import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
const inter = Inter({ subsets: ["latin"] });
import { CredentialsProvider } from "../contexts/Credentials";
export const metadata: Metadata = {
  title: "StudyMate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <CredentialsProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </CredentialsProvider>
      </body>
    </html>
  );
}
