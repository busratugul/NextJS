import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './app.css'

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
