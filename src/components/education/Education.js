import { useState } from 'react';
import { dataEducacion } from '../../data/education'
import { EducationCard } from './EducationCard'

export function Education() {

    const [cursos, setCursos] = useState(dataEducacion)

    return <main className='flex flex-col items-center w-[100%]'>
      {cursos && <div >
            {cursos.map((curso) => (<EducationCard key={curso.id}  {...curso} setcurso={setCursos} />))}
        </div>}
    </main>
}

