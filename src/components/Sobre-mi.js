import { avatar } from '../img'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import  Typewriter  from 'typewriter-effect';


function SobreMi() {


    return <main className=' h-full w-full p-10 text-[#c6d6dd] flex-wrap'>
        <div className='flex flex-col  content-center w-full content-fit'>
            <h1 className='font-bold text-5xl text-white mt-4'>Federico Alejandro</h1>
            <Typewriter className='mt-2' options={{
                strings: ['Full Stack Web Developer Jr'],
                autoStart: true,
                loop: true,
                pauseFor: 2000
            }} />
            <div className='flex justify-between'>
                <div className='flex flex-col justify-start content-center mt-10 text-lg'>
                    <p>¡Bienvenidos a mi portfolio!. Soy un Desarrollador Full Stack Junior,</p>
                    <p>en constante aprendizaje, descubriendo e incorporando nuevas</p>
                    <p>tecnologías y trabajando día a día para mejorar mis</p>
                    <p>habilidades dentro de este apasionante mundo.</p>
                    <p>Si bien mi experiencia ha trancurrido dentro de diferentes sectores,</p>
                    <p>siempre he luchado para superarme y alcanzar mis metas, es por eso que decidí</p>
                    <p>focalizarme en formarme como Developer, realizando un Bootcamp con dedicación</p>
                    <p>plena y a fin de empezar a desarrollarme profesionalmente en este ámbito.</p>
                    <p>Busco una oportunidad para comenzar a volcar mis conocimientos técnicos
                        y seguir evolucionando.</p>
                    <p><strong>Te invito a que navegues por esta web para conocerme un poco mas.</strong></p>

                    <div className='flex flex-row flex- gap-10 mt-20 flex-wrap'>
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white'
                                href='https://www.linkedin.com/in/federico-alejandro/'
                                target='_blank' rel='noreferrer'
                            >
                                <FaLinkedin size='1.5rem' />
                                LinkedIn
                            </a>
                        </span>
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white'
                                href='https://github.com/fede-alejandro'
                                target='_blank' rel='noreferrer'
                            >
                                <FaGithubSquare size='1.5rem' />
                                GitHub
                            </a>
                        </span>
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white'
                                href='mailto:fede.alejandro87@gmail.com' target='_blank' rel='noreferrer'>
                                <SiGmail size='1.5rem' />
                                Contacto</a>
                        </span>
                    </div>
                </div>
                <div className='hidden lg:flex h-80 m-auto'>
                    <img src={avatar} alt='avatar' />
                </div>
            </div>
        </div>
    </main>

}
export default SobreMi