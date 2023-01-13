import { useLayout } from '../provider/layout';

export function Banner() {
    const { language, text } = useLayout();

    return (
        <div className="flex flex-col lg:flex-row mt-14 lg:m-0 items-center mb-28 h-[65vh] lg:h-[90vh] w-fit my-auto mx-auto">
            <img src="./static/diego-pfp.png" alt="diego-pfp" className="w-72 lg:h-96 lg:w-auto lg:m-14 rounded-xl" />
            <div className='w-10/12 text-center lg:text-start'>
                <h1 className="text-[45px] lg:text-[65px] text-lime-400 font-bold">Diego Fernandes</h1>
                <h3 className="text-xl lg:text-2xl mt-4 font-bold opacity-75">{text[language].bio}</h3>
            </div>
        </div>
    )
}