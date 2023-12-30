import NavBar, { ACTIVE_LINK } from '@/components/navbar';
import EmptyPage from '@/components/empty-page';

export default function PastProjects() {
  return (
    <>
      <NavBar active={ACTIVE_LINK.COMPLETED} />
      <main>
        <EmptyPage />
      </main>
    </>
  )
}
