import Link from 'next/link'
import twitch from '../../public/twitch.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`grid grid-cols-2 auto-cols-auto gap-5`}>
      <p>
        I stream on Twitch every Monday, Wednesday, and Friday at 18:30 UK time.
        <Link href='http://timebie.com/std/london.php?q=18.5'>Check what time that is for you here.</Link>

        <Link href='https://twitch.tv/AurorasMadhouse/'><Image src={twitch} alt='Twitch Logo' /></Link>
      </p>
      <iframe
        className={`aspect-video w-full`}
        src="https://player.twitch.tv/?AurorasMadhouse&parent=aurorasmadhouse.com" />
    </main>
  )
}
