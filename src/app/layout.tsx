import { Nav, Sidebar } from "@/components"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "@/styles/index.scss"

export const metadata: Metadata = {}

const vazir = localFont({
  src: "../assets/fonts/Vazirmatn[wght].woff2",
  display: "swap",
})

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className}>
      <body>
        <header>
          <Nav />
        </header>
        <main>
          <Sidebar />
          <section>{children}</section>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
