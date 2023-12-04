import { useState } from 'react';
import { dataProyectos } from '../../data/project';
import { ProjectCard } from './ProjectCard';

export function ProjectList() {

    const [proyectos, setProyectos] = useState(dataProyectos)
    return (
        <main className='flex flex-col items-center w-[100%] p-10'>
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
