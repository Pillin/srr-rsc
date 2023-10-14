import WebVitals from "components/WebVitals"
import "./globals.css";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <WebVitals />
      <body>{children}</body>
    </html>
  );
}
