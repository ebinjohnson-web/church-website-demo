import "./globals.css";
import "./polish.css";
import "./image-led.css";
import Motion from "../components/Motion";
export const metadata = {
  title: "<div>\n  Grace Harbour Church | Church Website Demo\n</div>",
  description: "A fictional concept website by Ebin Johnson.",
  metadataBase: new URL(
    "https://ebinjohnson-web.github.io/church-website-demo/",
  ),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Motion />
        {children}
      </body>
    </html>
  );
}
