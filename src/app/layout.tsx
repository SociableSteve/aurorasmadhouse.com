import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

import logo from '../../public/logo.png';
import twitch from '../../public/twitch.png';
import discord from '../../public/discord-logo-black.png';
import etsy from '../../public/etsy-logo-bar-black.png';
import Link from 'next/link';

const DEFAULT_FONT = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Auroras Madhouse',
  description: 'Purchase diamond painting accessories, see Auroras projects, help her decide on the next project'
}

const logoHeight = 40;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${DEFAULT_FONT.className}`}>
        <header>
          <Image src={logo} alt="Auroras Madhouse Logo - A white unicorn with a blue mane and purple tail sat on a stool holding a cup of tea with the words Auroras Madhouse below" height={200} />
          <div className='logo-strip'>
            <Link href='https://aurorasmadhouse.etsy.com'>Visit our Store on <Image src={etsy} height={logoHeight} alt="Etsy Logo"  /></Link>
            <Link href='https://twitch.tv/aurorasmadhouse'>Join me on <Image src={twitch} height={logoHeight} alt="Twitch Logo" /></Link>
            <Link href='https://discord.gg/CWQ6xpTT2Q'>Chat with us on <Image src={discord} height={logoHeight} alt="Discord Logo" /></Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
