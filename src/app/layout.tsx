import '../css/globals.css'
import { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Main from '@/components/main/Main'

const kanit = Kanit({ weight: ['400', '600'], subsets: ['latin', 'latin-ext'] })

export const metadata = {
  title: {
    default: 'React Blog',
    template: '%s | React Blog'
  },
  description: 'Portfolio project created with Next.js',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${kanit.className} flex flex-col`}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  )
}
