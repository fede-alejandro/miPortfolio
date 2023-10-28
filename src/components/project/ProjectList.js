import { useState } from 'react';
import { dataProyectos } from '../../data/project';
import { ProjectCard } from './ProjectCard';

export function ProjectList() {

    const [proyectos, setProyectos] = useState(dataProyectos)
    return (
     
        <main className='flex flex-row sm:flex-col items-center  p-10 max-w-max text-[#c6d6dd]'>
            {proyectos && <div >
                {proyectos.map((proyecto) => (
                    <ProjectCard
                        key={proyecto.id}
                        {...proyecto}
                        setProjects={setProyectos}

                    />
                ))}
            </div>}
        </main>
    )
}
