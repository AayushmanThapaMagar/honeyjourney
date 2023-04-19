import './globals.css'
import { StorefrontProvider } from "@/provider/storefront-provider";

export const metadata = {
  title: 'Honey Journey | Buy Mad Honey Online',
  description: 'Buy pure Mad Honey online from Honey Journey. We offer 100% pure Mad Honey from the Himalayas. Shop now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StorefrontProvider>
      <body>{children}</body>
      </StorefrontProvider>
    </html>
  )
}
