import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useLayout } from '../provider/layout';

export function SocialsContacts() {
    const { themeColors, theme } = useLayout();

    return (
        <div className="h-[70vh] lg:h-[60vh] w-10/12 lg:w-3/5 mx-auto mb-20 lg:mb-0 text-blue-500">
            <div className="flex justify-around">
                <a href="https://github.com/odgiedev" target="_blank" rel="noopener noreferrer"> <BsGithub size={100} /> </a>
                <a href="https://www.linkedin.com/in/dev-diego-fernandes/" target="_blank" rel="noopener noreferrer"> <BsLinkedin size={100} /> </a>
            </div>
            <div className="mt-20 flex flex-col lg:flex-row justify-around">
                <div className="flex flex-col justify-center items-center">
                    <a href="mailto:dev.diegof@gmail.com" target="_blank" rel="noopener noreferrer"> <AiOutlineMail size={100} /> </a>
                    <span className={`ml-5 text-xl font-bold ${themeColors[theme].email_num}`}>dev.diegof@gmail.com</span>
                </div>
                <div className="flex flex-col mt-6 lg:m-0 justify-center items-center">
                    <a href="https://wa.me/5517992634608" target="_blank" rel="noopener noreferrer"> <AiOutlinePhone size={100} /> </a>
                    <span className={`ml-5 text-xl font-bold ${themeColors[theme].email_num}`}>+55 17 99263-4608</span>
                </div>
            </div>
        </div>
    )
}