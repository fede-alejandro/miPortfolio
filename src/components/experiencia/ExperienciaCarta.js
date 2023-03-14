import { dataExperiencia } from '../../data/experiencia'

export const ExperienciaCarta = ({
    title,
    ubicación,
    fecha,
    puesto
} = dataExperiencia) => {


    return <div className='flex flex-col items-center w-[100%]  text-[#c6d6dd]'>
        <div className='flex flex-col border-none shadow-2xl items-center md:flex-row border-2 border-[#c6d6dd] rounded-md p-4 m-4 gap-4 w-[100%]'>
            <div className='flex flex-col content-center'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p>{ubicación}</p>
                <time>{fecha}</time>
                <p>{puesto}</p>
            </div>
        </div>
    </div>

}