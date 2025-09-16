import { Roboto } from "next/font/google";
import Navbar from "@/components/navigation/navbar";
import "./globals.css";
import Footer from "@/components/navigation/footer";

const ojuju = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200","300","400", "500","600","700", "800",],
});

export const metadata = {
  title: "Osagie's Job Board",
  description: "Generated DevOsagie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ojuju.className}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
