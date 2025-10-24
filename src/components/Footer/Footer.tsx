import React from 'react'
import { ThemeToggle } from '@/components/Theme/ThemeToggle'
import Link from 'next/link'
//TODO: Update Footer component
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t bg-zinc-200 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 items-start justify-between w-full max-w-440 mx-auto">
        {/* Columna izquierda */}
        <div className="text-sm text-muted-foreground">
          &copy; {year} <span className="font-medium text-foreground">Lilia E. Martinez Rosas</span>
          <p>
            <Link href="tel:+19792862584" className="hover:text-white transition-colors" aria-label="Call Phone Number">
              +1 (979) 2 86 25 84
            </Link>
          </p>
          <p>
            <Link href="mailto:liliaelba123@gmail.com" className="hover:text-white transition-colors" aria-label="Send Email to liliaelba123@gmail.com">
              liliaelba123@gmail.com
            </Link>
          </p>
          <p>
            <Link href="https://maps.app.goo.gl/sG7Anx8cqFj4pmaK6" aria-label="Location">
              College Station, TX
            </Link>
          </p>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col items-end space-y-2">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
export default Footer;