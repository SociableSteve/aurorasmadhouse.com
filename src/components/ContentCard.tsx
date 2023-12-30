import Image from "next/image";

export default function ContentCard({project, primary}: {project: any, primary: boolean}) {
    console.log(project.fields);
    return (
        <div className='text-center'>
            <strong className='mb-2'>{project.fields.title}</strong>
            {project.fields.dateStarted && (<><br /> Started: {new Date(project.fields.dateStarted).toDateString()}</>)}
            {project.fields.dateCompleted && (<><br /> Started: {new Date(project.fields.dateCompleted).toDateString()}</>)}
            <Image src={`https:${project.fields.image.fields.file.url}`} alt={project.fields.title} height={500} width={500} className='mt-2 mx-auto' />
        </div>
    )
}