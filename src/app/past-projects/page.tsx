import NavBar, { ACTIVE_LINK } from '@/components/navbar';
import EmptyPage from '@/components/empty-page';
import { getCompletedProjects, getCurrentProject } from '@/contentful';
import ContentGallery from '@/components/ContentGallery';
import ContentCard from '@/components/ContentCard';

export default async function PastProjects() {
  const projects = await getCompletedProjects();
  const currentProject = await getCurrentProject();
  return (
    <>
      <NavBar active={ACTIVE_LINK.COMPLETED} />
      <main>
        {currentProject && (<div className='current-project'><h2>My Current Project</h2><ContentCard project={currentProject} primary={true} /></div>)}

        <h1>Completed Projects</h1>
        {!projects.length?(<EmptyPage />):(<ContentGallery projects={projects} />)}
      </main>
    </>
  )
}
