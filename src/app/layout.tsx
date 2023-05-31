import './styles/globals.scss'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata = {
  title: 'SpotiFire',
  description: 'Spotify clone built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
