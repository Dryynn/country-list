  import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Uma lista de países criada com next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunitoSans.className} antialiased`}
      >
        <main className="flex flex-col items-center bg-gray-100 min-h-screen">
          <nav className="flex bg-white w-full h-16 items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image
                src={"/logo.png"}
                width={48}
                height={48}
                alt="Emoji de Globo" />
              <h1 className="font-bold text-2xl text-black">Lista de países</h1>
            </section>
          </nav>
            {children}
        </main>
      </body>
    </html>
  );
}
