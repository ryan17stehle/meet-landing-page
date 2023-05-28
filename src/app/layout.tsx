import './globals.css'
import { Red_Hat_Display } from 'next/font/google'

const rhd = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['500', '900']
})

export const metadata = {
  title: 'Meet Landing Page',
  description: 'Created by Ryan Stehle with create-next-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rhd.className} min-w-[280px] max-w-[425px] border-2`}>
        {children}
      </body>
    </html>
  )
}
