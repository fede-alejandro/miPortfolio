import { useState } from 'react';
import { dataExperiencia } from '../../data/experiencia';
import { experiecialaboral } from '../../img';
import { CartaDeExperiencia } from './CartaDeExperiencia';



function Experiencia() {

    const [experiencias, setExperiencias] = useState(dataExperiencia)

    return <main className='w-[100%] p-10 text-[#c6d6dd] animate-fade-left animate-ease-in'>
        <div className='flex flex-col justify-around m-auto md:flex-row content-center w-[90%] gap-4'>
            <div className='hidden md:flex h-72 self-center'>
                <img src={experiecialaboral} alt='avatar' />
            </div>
            {experiencias && <div>
                {experiencias.map((experiencia) => (<CartaDeExperiencia key={experiencia.id}  {...experiencia} setExperiencias={setExperiencias}
                />))}
            </div>}
        </div>
    </main>
}
export default Experiencia