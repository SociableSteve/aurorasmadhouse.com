import ContentCard from '@/components/ContentCard';
import ContentGallery from '@/components/ContentGallery';
import EmptyPage from '@/components/empty-page';
import NavBar, { ACTIVE_LINK } from '@/components/navbar';
import { getCurrentProject, getFutureProjects } from '@/contentful';

export default async function Home() {
  const projects = await getFutureProjects();
  const currentProject = await getCurrentProject();
  return (
    <>
      <NavBar active={ACTIVE_LINK.UPCOMING} />
      <main>
        {currentProject && (<div className='current-project'><h2>My Current Project</h2><ContentCard project={currentProject} primary={true} /></div>)}

        <h1>Future Projects</h1>
        {!projects.length?(<EmptyPage />):(<ContentGallery projects={projects} />)}
      </main>
    </>
  )
}
