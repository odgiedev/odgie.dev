import { useLayout } from '../provider/layout';

export function Banner() {
    const { language, text } = useLayout();

    return (
        <div className="flex flex-col lg:flex-row mt-14 lg:m-0 items-center mb-20 h-[65vh] lg:h-[90vh] w-fit my-auto mx-auto">
            <img src="./static/diego-pfp.png" alt="diego-pfp" className="w-72 lg:h-96 lg:w-auto lg:m-14" />
            <div>
                <h1 className="text-4xl lg:text-6xl text-lime-400 font-bold">Diego Fernandes</h1>
                <h3 className="text-lg lg:text-xl mt-2 font-bold">{text[language].bio}</h3>
            </div>
        </div>
    )
}