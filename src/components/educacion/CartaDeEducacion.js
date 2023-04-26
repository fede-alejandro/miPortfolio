import { dataEducacion } from '../../data/educacion'

export const CartaDeEducacion = ({
    titulo,
    ubicación,
    fecha,
    credencial,
    instituto
} = dataEducacion) => {


    return <article className='flex flex-col items-center w-[100%] text-[#c6d6dd]'>
        <main className='flex flex-col border-none shadow-2xl items-center md:flex-row border-2 border-[#c6d6dd] rounded-md p-4 m-4 gap-4 w-[75%]'>
            <div className='flex flex-col content-center text-center gap-2'>
                <h2 className='font-bold text-2xl'>{titulo}</h2>
                <p>{ubicación}</p>
                <time>{fecha}</time>
                <p>{instituto}</p>
                {credencial && <a href={credencial} target='_blank' rel='noreferrer' className='flex m-auto justify-center border-2 border-blue-400  text-white text-center rounded-md p-2 transition ease-in duration-200 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600'>Certificado</a>}
            </div>
        </main>
    </article>
}