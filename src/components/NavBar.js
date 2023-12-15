import { NavLink } from 'react-router-dom';
import { Menu } from './Menu';


export function NavBar() {

    return <header className=' p-2'>

        <Menu />

        <div className='md:flex md:flex-wrap md:items-center md:justify-around md:mx-auto'>
            <nav className='hidden md:flex md:flex-col md:mt-4 md:w-full mb-8'>
                <ul className='flex justify-around'>
                    <NavLink to='/' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'active' : ''}`}>Sobre mi</NavLink>

                    <NavLink to='/educacion' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'active' : ''}`}>Educación</NavLink>

                    <NavLink to='/proyectos' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'active' : ''}`}>Proyectos</NavLink>

                    <NavLink to='/competencias' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'active' : ''}`}>Competencias</NavLink>

                    <NavLink to='/experiencia' className={({ isActive }) =>
                        `text-center transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'active' : ''}`}>Experiencia</NavLink>
                </ul>
            </nav>
        </div>

    </header>
}