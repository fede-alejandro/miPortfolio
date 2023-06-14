import { useState } from 'react';
import { dataProyectos } from '../../data/proyectos';
import { ProyectoCarta } from './ProyectoCarta';

function Proyectos() {

    const [proyectos, setProyectos] = useState(dataProyectos)
    
    return <main className='flex flex-col items-center w-[100%] p-10 text-[#c6d6dd]'>
        {proyectos && <div >
            {proyectos.map((proyecto) => (<ProyectoCarta key={proyecto.title}  {...proyecto} setProjects={setProyectos} />))}
        </div>}

    </main>

}
export default Proyectos