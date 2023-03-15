// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from './Menu';


export default function NavBar() {


    return <header className=' p-2 text-[#c6d6dd]'>

        <Menu />

        <div className='md:flex md:flex-wrap md:items-center md:justify-around md:mx-auto'>
            <nav className='hidden md:flex md:flex-col md:mt-4 md:w-full mb-10'>
                <ul className='flex justify-around '>
                    <NavLink to='/' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Sobre mi</NavLink>

                    <NavLink to='/educacion' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Educación</NavLink>

                    <NavLink to='/proyectos' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl  border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Proyectos</NavLink>

                    <NavLink to='/competencias' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Competencias</NavLink>

                    <NavLink to='/experiencia' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2  transition duration-300 ease-in-out' : ''}`}>Experiencia</NavLink>
                </ul>
            </nav>
        </div>
    </header>
}