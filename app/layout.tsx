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
        <body>
          <StorefrontProvider>
          <div
          // style={{ backgroundColor: 'rgb(35, 31, 30)' }}
          className='sticky inset-0 z-10 flex flex-row justify-between items-center w-full lg:px-10 mt-2 py-1'
          >
          <Navigation />
          </div>
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
