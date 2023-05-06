import './globals.css'
import { StorefrontProvider } from "@/provider/storefront-provider";
import Navigation  from "@/components/constants/navigation";
import Footer from "@/components/constants/footer";
import Cart from "@/components/constants/cart";


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
    <html>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <body>
          <StorefrontProvider>
          <Navigation />
          <Cart />
          <main>
            {children}
          </main>
          </StorefrontProvider>
          <footer>
          <Footer />
          </footer>
        </body>
      </head>
    </html>
  )
}
