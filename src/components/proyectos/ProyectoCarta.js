import { dataProyectos } from '../../data/proyectos';
import { FaGithubSquare } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs'



export const ProyectoCarta = ({
    title,
    description,
    repositorio,
    app,
    image
} = dataProyectos) => {


    return <article className='flex flex-col items-center w-[100%]  text-[#c6d6dd]'>
        <main className='flex flex-col border-none shadow-2xl items-center md:flex-row border-2 border-[#c6d6dd] rounded-md p-4 m-4 gap-4 w-[75%]'>
            <div className='flex items-center'>
                <img src={image} alt='ImageProject' className='rounded-md w-[10rem] lg:ml-2 max-w-lg' />
            </div>
            <div className='flex flex-col content-center'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p>{description}</p>
                <div className='flex flex-row gap-4'>
                    <a href={repositorio} target='_blank' rel='noreferrer' className='pt-2'>
                        <FaGithubSquare size='1.5rem' />
                    </a>
                    {app && <a href={app} target='_blank' rel='noreferrer' className='pt-2 '>
                        <BsFillEyeFill size='1.5rem' />
                    </a>}
                </div>
            </div>
        </main>
    </article>

}