import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

import logo from '../../public/logo.png';
import Link from 'next/link';

const DEFAULT_FONT = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Auroras Madhouse',
  description: 'Purchase diamond painting accessories, see Auroras projects, help her decide on the next project'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${DEFAULT_FONT.className}`}>
        <nav>
          <Link href='/'>
            <Image src={logo} alt="Auroras Madhouse Logo - A white unicorn with a blue mane and purple tail sat on a stool holding a cup of tea with the words Auroras Madhouse below" height={200} />
          </Link>
          <Link href='/'>Help choose our next project</Link>
          <Link href='https://aurorasmadhouse.etsy.com' target='_etsy'>Visit our Etsy Store</Link>
          <Link href='/past-projects'>See Past Projects</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
