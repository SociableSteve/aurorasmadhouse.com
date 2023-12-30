import NavBar, { ACTIVE_LINK } from '@/components/navbar';
import EmptyPage from '@/components/empty-page';

export default function Vods() {
  return (
    <>
      <NavBar active={ACTIVE_LINK.STREAMS} />
      <main>
        <EmptyPage />
      </main>
    </>
  )
}
