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
            <button data-collapse-toggle='navbar-hamburger' onClick={handleToggleMenu} type='button' className='button_menu' aria-controls='navbar-hamburger' aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
            </button>
            <div className='w-full' id='navbar-hamburger' onClick={menuOpen}>
                {toggleButton === 'close' &&
                    <ul className='fixed w-50 h-52 z-20 flex flex-col mt-4 gap-2 border border-white bg-[#427290] shadow-2xl rounded-xl text-center animate-fade-right animate-ease-in animate-duration-500'>
                        <NavLink to='/' className={({ isActive }) =>
                            `text-xl ${isActive ? ' menu_active' : ''}`} aria-current='page'>Sobre mi</NavLink>

                        <NavLink to='/educacion' className={({ isActive }) =>
                            `text-xl ${isActive ? 'menu_active' : ''}`}>Educación</NavLink>

                        <NavLink to='/proyectos' className={({ isActive }) =>
                            `text-xl ${isActive ? 'menu_active' : ''}`}>Proyectos</NavLink>

                        <NavLink to='/competencias' className={({ isActive }) =>
                            `text-xl ${isActive ? 'menu_active' : ''}`}>Competencias</NavLink>

                        <NavLink to='/experiencia' className={({ isActive }) =>
                            `text-xl ${isActive ? 'menu_active' : ''}`}>Experiencia</NavLink>
                    </ul>}
            </div>
        </nav>
    )
}