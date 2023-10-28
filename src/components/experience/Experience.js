import { useState } from 'react';
import { dataExperiencia } from '../../data/experience';
import { experiecialaboral } from '../../img';
import { ExperienceCard } from './ExperienceCard';



export function Experience() {

    const [experiencias, setExperiencias] = useState(dataExperiencia)

    return <main className='w-[100%] p-10 text-[#c6d6dd]'>
        <div className='flex flex-col justify-around m-auto md:flex-row content-center w-[90%] gap-4'>
            <div className='hidden md:flex h-72 self-center'>
                <img src={experiecialaboral} alt='avatar' />
            </div>
            {experiencias && <div>
                {experiencias.map((experiencia) => (<ExperienceCard key={experiencia.id}  {...experiencia} setExperiencias={setExperiencias}
                />))}
            </div>}
        </div>
    </main>
}
