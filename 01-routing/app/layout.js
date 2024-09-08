import '../output.css';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className='bg-gray-200 w-full p-10 text-center'>
        {children}
      </body>
    </html>
  );
}
