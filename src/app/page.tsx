import EmptyPage from '@/components/empty-page';
import NavBar, { ACTIVE_LINK } from '@/components/navbar';

export default function Home() {
  return (
    <>
      <NavBar active={ACTIVE_LINK.UPCOMING} />
      <main>
        <EmptyPage />
      </main>
    </>
  )
}
