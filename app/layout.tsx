import './globals.css'

export const metadata = {
  title: 'Ankur Tripathi - Portfolio | Piramal Foundation',
  description: 'Program Manager / Project Manager - Technology Product Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}