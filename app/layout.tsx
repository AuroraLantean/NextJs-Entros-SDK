import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entros Pulse SDK",
  description: "Entros Pulse SDK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col`}>
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen w-full max-w-7xl flex-col items-center bg-zinc-50 dark:bg-black px-6 pb-10 sm:px-10 overflow-hidden">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
