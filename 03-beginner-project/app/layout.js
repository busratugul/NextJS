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

export const metadata = {
  title: {
    default: 'My Site',
    template: '%s | My Site', // Sayfalar arasında başlık değiştirme
  },
  description: 'This is a global description for my site',
};
