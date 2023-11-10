import { Navbar } from '@/components/common'
import '../styles/globals.css'
import { Footer } from '@/components/common/footer/Footer'

export const metadata = {
  title: "Wikisaurios",
  description: 'Generated  by Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className='bg-gradient-to-r from-secondary ...'>
      <body>
        <Navbar />
        <div className='w-11/12'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}