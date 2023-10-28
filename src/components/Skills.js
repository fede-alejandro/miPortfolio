import { skills } from '../img';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiJest, SiNpm, SiJavascript, SiMongodb, SiBootstrap } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'



export function Skills() {

    return <main className='flex content-center justify-center text-black font-bold italic w-[100%]'>
        <div className='flex flex-col justify-center content-center mt-20 md:flex-row gap-20'>
            <div className='flex justify-center mt-20'>
                <img src={skills} alt='' className='h-40' />
            </div>
            <div className='grid grid-cols-4 gap-7 list-none'>

                <div className='competencias'>
                    <SiJavascript size='1.5rem' />
                    <span>JavaScript</span>
                </div>
                <div className='competencias'>
                    <RiReactjsLine size='1.5rem' />
                    <span>ReactJs</span>
                </div>
                <div className='competencias'>
                    <AiFillHtml5 size='1.5rem' />
                    <span>HTML5</span>
                </div>
                <div className='competencias'>
                    <IoLogoCss3 size='1.5rem' />
                    <span>CSS</span>
                </div>
                <div className='competencias'>
                    <SiBootstrap size='1.5rem' />
                    <span>Bootstrap</span>
                </div>
                <div className='competencias'>
                    <SiTailwindcss size='1.5rem' />
                    <span>Tailwind</span>
                </div>
                <div className='competencias'>
                    <IoLogoNodejs size='1.5rem' />
                    <span>NodeJS</span>
                </div>
                <div className='competencias'>
                    <SiMongodb size='1.5rem' />
                    <span>MongoDB</span>
                </div>

                <div className='competencias'>
                    <SiJest size='1.5rem' />
                    <span>Jest</span>
                </div>
                <div className='competencias'>
                    <FaGitAlt size='1.5rem' />
                    <span>Git</span>
                </div>
                <div className='competencias'>
                    <AiOutlineGithub size='1.5rem' />
                    <span>GitHub</span>
                </div>
                <div className='competencias'>
                    <SiNpm size='1.5rem' />
                    <span>NPM</span>
                </div>
            </div>
        </div>
    </main>
}
