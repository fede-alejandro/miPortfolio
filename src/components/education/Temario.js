import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';


export const Temario = ({ onClose, temario }) => {


    return (
        <main className='fixed z-10 flex w-[100%] h-full  justify-center md:items-center md:justify-start' onClick={onClose} >
            <div className='fixed  text-center w-[75%]  flex flex-col border md:w-8/12 md:my-20 lg:w-5/12 m-auto border-white bg-[#427290] shadow-2xl rounded-xl'>
                <p className='flex flex-col m-2 p-2 justify-start'>{temario}</p>
                <AiOutlineCloseCircle size='1.5rem' className='m-2 flex justify-end' onClick={onClose} />
            </div>
        </main>
    )
}
