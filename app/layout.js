import "./globals.css";
import { Montserrat } from "next/font/google";
import { satoshi } from "./fonts/fonts";
import RootComponent from "./components/RootComponent";
import { OpenContextProvider } from "./contexts/OpenContext";
import { SubscribeContextProvider } from "./contexts/SubscribeContext";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Alyika Chatbot",
  description: "Environmental Awareness Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${montserrat.variable}`}>
      <body className="h-auto bg-main-bg relative">
        <OpenContextProvider>
          <SubscribeContextProvider>
            <RootComponent>{children}</RootComponent>
            <Toaster
              position="bottom-right"
              reverseOrder={false}
              toastOptions={{
                duration: 4000,
                style: {
                  background: "#012f25",
                  color: "#fff",
                },
              }}
            />
          </SubscribeContextProvider>
          {/* <ChatWidget /> */}
        </OpenContextProvider>
      </body>
    </html>
  );
}
// Checked!
