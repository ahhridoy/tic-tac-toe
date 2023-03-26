import './globals.css'

export const metadata = {
  title: 'Tic Tac Toe',
  description: 'This is Tic Tac Toe Game App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
