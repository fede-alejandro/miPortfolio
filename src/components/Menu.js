import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Menu() {

    const [toggleButton, setToggleButton] = useState('menu')

    const handleToggleMenu = () => setToggleButton(toggleButton === 'menu' ? 'close' : 'menu')

    const menuOpen = () => {
        !toggleButton ? setToggleButton(true) : setToggleButton()

        setToggleButton('menu')
    }

    return (
        <nav>
            <button data-collapse-toggle='navbar-hamburger' onClick={handleToggleMenu} type='button' className='inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg hover:border-2 focus:outline-none md:hidden' aria-controls='navbar-hamburger' aria-expanded='false'>
                <span class='sr-only'>Open main menu</span>
                <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
            </button>
            <div className='w-full' id='navbar-hamburger' onClick={menuOpen}>
                {toggleButton === 'close' &&
                    <ul className='fixed w-50 h-52 z-20 flex flex-col mt-4 gap-2 border border-white bg-[#427290] shadow-2xl rounded-xl text-center'>
                        <NavLink to='/' className={({ isActive }) =>
                            `text-xl ${isActive ? ' text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`} aria-current='page'>Sobre mi</NavLink>

                        <NavLink to='/educacion' className={({ isActive }) =>
                            `text-xl ${isActive ? 'text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`}>Educación</NavLink>

                        <NavLink to='/proyectos' className={({ isActive }) =>
                            `text-xl ${isActive ? 'text-white text-2xl  p-1 transition duration-300 ease-out hover:ease-in' : ''}`}>Proyectos</NavLink>

                        <NavLink to='/competencias' className={({ isActive }) =>
                            `text-xl ${isActive ? 'text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`}>Competencias</NavLink>

                        <NavLink to='/experiencia' className={({ isActive }) =>
                            `text-xl ${isActive ? 'text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`}>Experiencia</NavLink>
                    </ul>}
            </div>
        </nav>
    )
}