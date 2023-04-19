export const metadata = {
  title: 'Buy Mad Honey', // this can be dynamic
  description: 'Buy pure Mad Honey online from Honey Journey. We offer 100% pure Mad Honey from the Himalayas. Shop now!',
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
