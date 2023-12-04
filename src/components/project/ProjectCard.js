import { dataProyectos } from '../../data/project';
import { FaGithubSquare } from 'react-icons/fa';
import { BsDisplay } from 'react-icons/bs'

export const ProjectCard = ({
    title,
    description,
    repositorio,
    app,
    image
} = dataProyectos) => {

    return (
        <main className='bg-[#2b5570] text-[#c6d6dd] max-w-sm m-4 rounded-xl shadow'>

            <img src={image} alt='ImageProject' className='border border-gray-200 rounded-t-lg' />

            <div className='flex flex-col justify-between p-4 leading-normal'>
                <h2 className='mb-2 text-2xl font-bold tracking-tight'>{title}</h2>
                <p className='mb-3 font-normal'>{description} </p>
                
                <div className='flex justify-end flex-row gap-4 pt-2'>
                    <a href={repositorio} target='_blank' rel='noreferrer' className=''>
                        <FaGithubSquare size='1.5rem' />
                    </a>
                    {app && <a href={app} target='_blank' rel='noreferrer' className=''>
                        <BsDisplay size='1.5rem' />
                    </a>}
                </div>
            </div>
        </main>
    )
}