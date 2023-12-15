import { useState } from 'react';
import { dataEducacion } from '../../data/education';
import { Temario } from './Temario';

export const EducationCard = ({
    titulo,
    temario,
    ubicación,
    fecha,
    credencial,
    instituto
} = dataEducacion) => {

    const [temarioCurso, setTemarioCurso] = useState(false)

    const temas = () => !temarioCurso ? setTemarioCurso(true) : setTemarioCurso()

    const closetemarioCurso = () => setTemarioCurso()

    return (
        <article className='flex flex-col items-center w-[100%]'>
            <main className='bg-[#2b5570] flex flex-col  shadow-2xl items-center md:flex-row rounded-md p-4 m-4 gap-4 w-[75%]'>
                <div className='flex flex-col content-center text-center gap-2'>
                    <h2 className='font-bold text-2xl'>{titulo}</h2>
                    <i>{ubicación} - {fecha}</i>
                    <p>{instituto}</p>
                    <div className='flex flex-row justify-center gap-4'>
                        {credencial && <a href={credencial} className='button'>Certificado</a>}
                        {/* {temario && <button onClick={temas} className='button'>Temario</button>} */}
                    </div>
                </div>
                {temarioCurso && <Temario temario={temario} onClose={closetemarioCurso} />}

            </main>
        </article>
    )
}
