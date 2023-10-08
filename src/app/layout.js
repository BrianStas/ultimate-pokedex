import './globals.css'
import { Inter } from 'next/font/google'
import Heading from './Heading'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ultimate Pokedex',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
          <div className="flex-grow">
            <Heading />
            <main className="my-0 py-16">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
