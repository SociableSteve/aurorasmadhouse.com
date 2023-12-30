import ContentCard from "./ContentCard";

export default function ContentGallery({projects} : {projects: any}) {
    return (
        <div className='grid grid-cols-4 gap-10'>
            {projects.map((project: any) => <ContentCard key={project.sys.id} project={project} primary={false} />)}
        </div>
    );
}