import { Carousel } from 'flowbite-react'
import { useState } from 'react';
import { useLayout } from '../provider/layout';

function ProjectsSlide() {
    const { language, text, theme, themeColors } = useLayout();

    const techs = {
        react: {
            name: 'React',
            site: 'https://reactjs.org/',
        },
        nest: {
            name: 'Nest.js',
            site: 'https://nestjs.com/',
        },
        typescript: {
            name: 'TypeScript',
            site: 'https://www.typescriptlang.org/',
        },
        aws: {
            name: 'AWS',
            site: 'https://aws.amazon.com/what-is-aws/',
        },
        tailwind: {
            name: 'Tailwind CSS',
            site: 'https://tailwindcss.com/',
        },
        bootstrap: {
            name: 'Bootstrap',
            site: 'https://getbootstrap.com/',
        },
        postgresql: {
            name: 'PostgreSQL',
            site: 'https://www.postgresql.org/',
        },
        laravel: {
            name: 'Laravel',
            site: 'https://laravel.com/',
        },
        mysql: {
            name: 'MySQL',
            site: 'https://www.mysql.com/',
        },
    }
    
    const [images] = useState([
        { url: "https://cdn.discordapp.com/attachments/738871298557476874/1063593997249019974/Screenshot_from_2023-01-13_20-02-43.png", title: "Linkiess", tech: [techs.react, techs.nest, techs.typescript, techs.aws, techs.tailwind, techs.postgresql], links: ["https://linkiess.onrender.com/"] },
        { url: "https://github.com/odgiedev/imacloud/blob/master/src/static/profile.png?raw=true", title: "Imacloud", tech: [techs.react, techs.typescript, techs.tailwind], links: ["https://github.com/odgiedev/imacloud", "https://github.com/odgiedev/imacloud-api"] },
        { url: "https://raw.githubusercontent.com/odgiedev/rass/main/src/assets/github/home1.png", title: "Rass", tech: [techs.react, techs.typescript, techs.tailwind], links: ["https://github.com/odgiedev/rass", "https://github.com/odgiedev/rass-api"] },
        { url: "https://raw.githubusercontent.com/odgiedev/frc/master/storage/app/public/frc1.PNG", title: "FRC", tech: [techs.laravel, techs.bootstrap, techs.mysql], links: ["https://github.com/odgiedev/frc"] },
        { url: "https://raw.githubusercontent.com/odgiedev/tl/master/storage/app/public/tl2.PNG", title: "TL", tech: [techs.laravel, techs.bootstrap, techs.mysql], links: ["https://github.com/odgiedev/tl"] },
        { url: "https://github.com/odgiedev/ecommercegen/raw/master/storage/app/public/github/cart.png", title: "E-commerce GEN", tech: [techs.laravel, techs.bootstrap, techs.mysql], links: ["https://github.com/odgiedev/ecommercegen"] },
        { url: "https://github.com/odgiedev/to_do_laravel/raw/master/storage/app/public/todolaravel1.PNG", title: "To Do Laravel", tech: [techs.laravel, techs.bootstrap, techs.mysql], links: ["https://github.com/odgiedev/to_do_laravel"] },
    ]);

    const [apis] = useState([
        {url: "https://github.com/odgiedev/imacloud-api", title: "Imacloud"},
        {url: "https://github.com/odgiedev/rass-api", title: "Rass"}, 
        {url: "https://github.com/odgiedev/warriors", title: "Warriors"}, 
        {url: "https://github.com/odgiedev/to-do-vue-api", title: "To Do Vue"}, 
        {url: "https://github.com/odgiedev/api-to-do", title: "To Do"},
    ]);

    return (
        <div className="flex justify-center border border-4 border-lime-400 rounded-lg items-end h-[70vh] lg:h-[77vh] w-11/12 lg:w-10/12 mx-auto mb-20">
            <Carousel>
                {images.map((i, index) => {
                    const title = i.title;
                    const desc = text[language].carousel[title];
                    return (
                        <div key={index}>
                            <div className="flex items-center bg-black md:bg-transparent lg:items-end h-full lg:h-[80vh] w-full absolute z-10 cursor-auto">
                                <div className={`flex flex-col text-md lg:text-xl justify-center items-center w-full h-full xl:h-1/2 bg-black opacity-80 lg:mb-8 ${themeColors[theme].carousel_title}`}>
                                    <div className='flex flex-col break-words text-center justify-center items-center w-11/12'>
                                        <span className='font-bold text-xl lg:text-3xl'>{i.title}</span>
                                        <span className='font-semibold text-white'>{desc}</span>
                                        <div className='flex flex-wrap justify-center mt-5 text-white'>
                                            {i.tech.map((tech, index) => {
                                                return (
                                                    <a key={index} href={tech.site} target="_blank" rel="noopener noreferrer" className='font-bold text-md lg:text-lg bg-fuchsia-800 p-1 lg:p-2 rounded-lg mr-1'>{tech.name}</a>
                                                )
                                            })}
                                        </div>
                                        <div className="flex mt-2">
                                            <a href={i.links[0]} target="_blank" rel="noopener noreferrer" className='font-bold text-md lg:text-lg text-white bg-lime-500 p-1 lg:p-2 rounded-lg mr-1'>{i.links[0].includes('github') ? 'GitHub' : 'Site'}</a>
                                            {i.links[1] && <a href={i.links[1]} target="_blank" rel="noopener noreferrer" className='font-bold text-md lg:text-lg text-white bg-lime-500 p-1 lg:p-2 rounded-lg mr-1'>API</a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='h-[80vh] md:h-auto' src={i.url} alt="Project pic" />
                        </div>
                    )
                })}
                <div className="cursor-auto flex flex-col text-md lg:text-xl justify-center items-center w-full h-[80vh] bg-black opacity-80 mb-5">
                    <span className='hidden lg:inline font-bold text-xl lg:text-3xl text-amber-400'>APIs</span>
                    {apis.map((a, index) => <a key={index} href={a.url} target="_blank" rel="noopener noreferrer" className='hidden lg:inline font-bold text-md lg:text-lg text-white bg-lime-500 p-1 lg:p-2 rounded-lg mt-3 w-2/3 text-center'>{a.title}</a>)}
                    <a href="https://github.com/odgiedev?tab=repositories" target="_blank" rel="noopener noreferrer" className="mt-4 font-bold p-1 lg:p-2 rounded text-amber-400">All projects</a>
                </div>
            </Carousel>
        </div>
    )
}

export default ProjectsSlide;
