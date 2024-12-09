import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ActiveNavProvider } from "@/context/ActiveNavContext";

export const metadata = {
  title: "WeFrameTech",
  description: "Responsive web app for showcasing products",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-playfair">
        <ActiveNavProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ActiveNavProvider>
      </body>
    </html>
  );
}
