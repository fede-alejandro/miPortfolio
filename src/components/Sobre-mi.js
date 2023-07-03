import { fedecv } from '../img'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import Typewriter from 'typewriter-effect';


function SobreMi() {


    return <main className='flex h-full w-full p-10 text-[#c6d6dd] flex-wrap'>
        <div className='flex flex-col justify-center content-center'>
            <h1 className='font-bold text-5xl text-white mt-2'>Federico Alejandro</h1>
            <Typewriter className='mt-2' options={{
                strings: ['Full Stack Web Developer Jr'],
                autoStart: true,
                loop: true,
                pauseFor: 2000
            }} />
            <div className='flex flex-col-reverse mt-4 items-center md:flex-row justify-between gap-20'>

                <div className='flex flex-col justify-start content-center text-lg'>
                    <p>¡Bienvenidos a mi portfolio!. Soy un Desarrollador Full Stack Junior,
                        en constante aprendizaje, descubriendo e incorporando nuevas
                        tecnologías y trabajando día a día para mejorar mis
                        habilidades dentro de este apasionante mundo.
                        Si bien mi experiencia ha trancurrido dentro de diferentes sectores,
                        siempre he luchado para superarme y alcanzar mis metas, es por eso que decidí
                        focalizarme en formarme como Developer, realizando un Bootcamp con dedicación
                        plena y a fin de empezar a desarrollarme profesionalmente en este ámbito.
                        Busco una oportunidad para comenzar a volcar mis conocimientos técnicos
                        y seguir evolucionando.
                        <strong>Te invito a que navegues por esta web para conocerme un poco mas.</strong>
                    </p>

                    <div className='flex flex-row flex- gap-10 mt-20 flex-wrap'>
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white hover:font-semibold'
                                href='https://www.linkedin.com/in/federico-alejandro/'
                                target='_blank' rel='noreferrer'
                            >
                                <FaLinkedin size='1.5rem' />
                                LinkedIn
                            </a>
                        </span>
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white hover:font-semibold'
                                href='https://github.com/fede-alejandro'
                                target='_blank' rel='noreferrer'
                            >
                                <FaGithubSquare size='1.5rem' />
                                GitHub
                            </a>
                        </span>
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white hover:font-semibold'
                                href='mailto:fede.alejandro87@gmail.com' target='_blank' rel='noreferrer'>
                                <SiGmail size='1.5rem' />
                                Contacto</a>
                        </span>
                    </div>
                </div>
                <img src={fedecv} alt='fedecv' className='h-60 border-4 border-[#c6d6dd] rounded-full m-auto md:h-80' />
            </div>
        </div>
    </main>

}
export default SobreMi