import { createContext, useContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = (props) => {
    const [language, setLanguage] = useState("pt_br");
    const [theme, setTheme] = useState("dark");

    const [text] = useState({
        "pt_br": {
            "bio": "Desenvolvedor Back-end",
            "projectsTitle": "Projetos",
            "skillsTitle": "Habilidades principais",
            "socialsContactTitle": "Redes / Contato",
            "aboutTitle": "Sobre",
            "about": "Olá! me chamo Diego sou desenvolvedor full-stack com foco no back-end, atualmente tenho 19 anos e estou cursando o 1º semestre de ciência da computação. Comecei a estudar programação em 2020, mas tive meu primeiro contato com programação aos 13 anos modificando scripts de bot do Tibia. Entusiasta no desenvolvimento de jogos e cibersegurança e apaixonado por tecnologia desde o primeiro contato, sempre empolgado para aprender mais!",
            "carousel": {
                "Linkiess": "Junte todas as suas redes em um só lugar!",
                "Imacloud": "Envie suas imagens para nuvem!",
                "Rass": "Avalie uma música.",
                "FRC": "Imageboard / Forum",
                "TL": "Rede social de imagens e gifs.",
                "E-commerce GEN": "E-commerce de videogames.",
                "To Do Laravel": "Lista de tarefas.",
            }
        },
        "en_us": {
            "bio": "Back-end developer",
            "projectsTitle": "Projects",
            "skillsTitle": "Main skills",
            "socialsContactTitle": "Socials / Contact",
            "aboutTitle": "About",
            "about": "Hi! My name is Diego, I'm a full-stack developer focused on the back-end, I'm currently 19 years old and I'm studying the 1st semester of computer science. I started studying programming in 2020, but I had my first contact with programming at age 13 modifying Tibia bot scripts. Enthusiastic about game development and cybersecurity and passionate about technology from the first contact, always excited to learn more!",
            "carousel": {
                "Linkiess": "Gather all your links in one place!",
                "Imacloud": "Upload your images to the cloud!",
                "Rass": "Rate a song.",
                "FRC": "Imageboard / Forum",
                "TL": "Social media of gifs and images.",
                "E-commerce GEN": "E-commerce of consoles.",
                "To Do Laravel": "To-do list.",
            }
        }
    });

    const [themeColors] = useState({
        "dark": {
            "main_background": "bg-[#280047]",
            "background": "bg-gradient-to-b from-[#33005a] to-[#550096]",
            "main_text": "text-amber-400",
            "navbar_text": "text-amber-400",
            "en_us_flag": "text-white",
            "about": "text-slate-200",
            "email_num": "text-slate-200",
            "carousel_title": "text-amber-400",
        },
        "light": {
            "main_background": "bg-slate-400",
            "background": "bg-slate-300",
            "main_text": "text-black",
            "navbar_text": "text-black",
            "en_us_flag": "text-red-500",
            "about": "text-black",
            "email_num": "text-black",
            "carousel_title": "text-amber-400",
        },
    });

    return (
        <LayoutContext.Provider value={{ language, setLanguage, theme, setTheme, text, themeColors }}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => useContext(LayoutContext);