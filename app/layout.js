import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'

export const metadata = {
  title: 'Study Buddy',
  description: 'Study Buddy Language Center presence',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-ibmplex scroll-smooth'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
