import './globals.css'

export const metadata = {
  title: 'Pellegrino 2000',
  description: 'Neighbourhood Trattoria in Surry Hills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
