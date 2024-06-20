import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SocialMediaButtons from '@/components/socialMediaButtons'
import './globals.css'

import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  style: ["normal", "italic"],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Giardelli-Gonzalez',
  description: 'Búsqueda de empleos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="es">
          <body className={`${robotoCondensed.className}`}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ToastProvider />
              <ModalProvider />
              <Navbar />
              {children}
              <Footer />
              <SocialMediaButtons />
            </ThemeProvider>
          </body>
        </html>
    </ClerkProvider>
  )
}