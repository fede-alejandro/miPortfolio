
import { skills } from '../img';



function Competencias() {

    return <main className='flex content-center justify-center text-black font-bold italic w-[100%]'>
        <div className='flex flex-col justify-center content-center mt-20 md:flex-row gap-20 '>
            <div className='flex justify-center mt-20'>
                <img src={skills} alt='' className='h-40' />
            </div>
            <div className='grid grid-cols-[100px_minmax(100px,_1fr)_100px] gap-3 list-none'>
                {/* <div className='flex flex-row gap-10'> */}
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>HTML5</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg shadow-xl shadow-gray-600'>
                    <p>CSS</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>Git</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>SASS</p>
                </div>
                
                <div className='flex  bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>Tailwind</p>
                </div>
                <div className='flex  bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>ReactJs</p>
                </div>
                <div className='flex  bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>JavaScript</p>
                </div>
              
                <div className='flex  bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>Node JS</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg  shadow-xl shadow-gray-600'>
                    <p>MongoDB</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>File System</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>HTTP Module</p>
                </div>
              
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>Jest</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>Express</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>API Rest</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>GitHub</p>
                </div>
                <div className='flex bg-rose-200 p-2 justify-center rounded-lg gap-2 shadow-xl shadow-gray-600'>
                    <p>NPM</p>
                </div>
            </div>
        </div>
    </main>
}

export default Competencias