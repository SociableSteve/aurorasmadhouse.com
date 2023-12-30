import Link from "next/link";

export enum ACTIVE_LINK {
    UPCOMING,
    COMPLETED,
    STREAMS
};

export default function NavBar({active}: {active:ACTIVE_LINK}) {
    return (
    <nav>
      <Link href="/" className={active == ACTIVE_LINK.UPCOMING ? 'active' : ''}>Upcoming Projects</Link>
      <Link href="/past-projects" className={active == ACTIVE_LINK.COMPLETED ? 'active' : ''}>Completed Projects</Link>
      <Link href="/vods" className={active == ACTIVE_LINK.STREAMS ? 'active' : ''}>Past Twitch Streams</Link>
    </nav>
    )
}