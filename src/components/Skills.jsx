import { BsBootstrap } from 'react-icons/bs';
import { FaPhp, FaNodeJs, FaReact, FaLaravel } from 'react-icons/fa';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SiMongodb, SiTailwindcss, SiNestjs, SiTypescript } from 'react-icons/si';

export function Skills() {
    return (
        <div className="flex flex-wrap items-center justify-around h-[50vh] overflow-y-auto mx-auto w-9/12 lg:w-1/2 mb-14 text-blue-500">
                <FaPhp size={100} title="PHP" />
                <FaLaravel size={100} title="Laravel" />
                <FaNodeJs size={100} title="Node.js" />
                <SiTypescript size={100} title="TypeScript" />
                <SiNestjs size={100} title="Nest.js" />
                <FaReact size={100} title="React" />
                <SiTailwindcss size={100} title="Tailwind CSS" />
                <BsBootstrap size={100} title="Bootstrap" />
                <AiOutlineConsoleSql size={100} title="SQL" />
                <SiMongodb size={100} title="MongoDB" />
        </div>
    )
}