export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div>Ben test layoutundan geliyorum</div>
        <div>{children}</div>
      </body>
    </html>
  )
}
