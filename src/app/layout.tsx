import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importações e configurações do Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Previne o Font Awesome de adicionar o CSS automaticamente, pois já o importamos manualmente
config.autoAddCss = false;

// Importação do Toaster para notificações
import { Toaster } from "react-hot-toast";

// Definição e configuração das fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadados da página
export const metadata: Metadata = {
  title: {
    default: 'Pet+ | Cuidando do seu melhor amigo',
    template: '%s | Pet+',
  },
  description: 'A melhor plataforma para conectar você aos melhores produtos e cuidados para o seu pet.',
};

// Componente RootLayout principal
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}