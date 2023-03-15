import { useState } from 'react';
import { dataEducacion } from '../../data/educacion'
import { CartaDeEducacion } from './CartaDeEducacion'

function Educacion() {

    const [cursos, setCursos] = useState(dataEducacion)

    return <main className='flex flex-col items-center w-[100%]  text-[#c6d6dd]'>
      {cursos && <div >
            {cursos.map((curso) => (<CartaDeEducacion key={curso.id}  {...curso} setcurso={setCursos} />))}
        </div>}
    </main>
}

export default Educacion
