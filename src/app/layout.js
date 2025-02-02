import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Counter Strike 2 App",
  description: "Made by Zoxplers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
