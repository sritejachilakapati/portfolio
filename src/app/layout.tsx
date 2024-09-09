import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/PageFooter";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="flex min-h-screen flex-col text-white">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-grow px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
