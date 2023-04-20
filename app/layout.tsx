import './globals.css'
import { StorefrontProvider } from "@/provider/storefront-provider";
import Navigation  from "@/components/constants/navigation";
import Footer from "@/components/constants/footer";
// import {Cart} from "@/components/cart";


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
        <body>
          <StorefrontProvider>
          <Navigation />
          <main>
            {children}
          </main>
          </StorefrontProvider>
        </body>
      </head>
    </html>
  )
}
