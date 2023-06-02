import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';


export const Temario = ({ onClose, temario }) => {


    return (
        <main className='fixed flex w-[100%] h-[100%]' onClick={onClose} >
            <div className='fixed w-[50%] h-52 my-20 flex flex-col justify-between border border-white bg-[#427290] shadow-2xl rounded-xl'>
                <p className='flex flex-col m-2 p-2 justify-start'>{temario}</p>
                <AiOutlineCloseCircle size='1.5rem' className='m-2 flex justify-end' onClick={onClose} />
            </div>
        </main>
    )
}
