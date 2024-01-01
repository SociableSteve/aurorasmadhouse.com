import ContentCard from "./ContentCard";

export default function ContentGallery({projects} : {projects: any}) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
            {projects.map((project: any) => <ContentCard key={project.sys.id} project={project} primary={false} />)}
        </div>
    );
}