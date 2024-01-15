import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Reference from "./components/Reference"

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700"] })

export const metadata: Metadata = {
  title: "Frontend Mentor Challenge",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} flex min-h-screen flex-col items-center justify-center bg-light-grayish-blue p-6 text-very-dark-grayish-blue`}
      >
        {children}
        <Reference />
      </body>
    </html>
  )
}
