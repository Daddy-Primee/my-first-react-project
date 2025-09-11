import { Ojuju } from "next/font/google";
import "./globals.css";

const ojuju = Ojuju({
  variable: "--font-ojuju",
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
        className={`${Ojuju.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
