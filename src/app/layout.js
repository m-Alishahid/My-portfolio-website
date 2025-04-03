import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionprovider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meet Ali shahid a front-end developer and ui ux designer from pakistan",
  description: "Animated portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        </body>
    </html>
  );
}
