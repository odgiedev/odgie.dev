import { createContext, useContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = (props) => {
    const [language, setLanguage] = useState("pt_br");
    const [theme, setTheme] = useState("dark");

    const [text] = useState({
        "pt_br": {
            "bio": "Desenvolvedor Full-stack",
            "projectsTitle": "Projetos",
            "skillsTitle": "Habilidades",
            "socialsContactTitle": "Redes / Contato",
            "aboutTitle": "Sobre",
            "about": "Olá! me chamo Diego, comecei a estudar programação em 2020, sou um desenvolvedor full-stack, entusiasta no desenvolvimento de jogos e hacking. Meu primeiro contato com programação, eu tinha 13 anos e foi modificando scripts de bot do Tibia . Atualmente tenho 18 anos e moro no interior de São Paulo.",
            "carousel": {
                "Imacloud": "Envie suas imagens para nuvem!",
                "Rass": "Avalie uma música.",
                "FRC": "Imageboard / Forum",
                "TL": "Rede social de imagens e gifs.",
                "E-commerce GEN": "E-commerce de videogames.",
                "To Do Laravel": "Lista de tarefas.",
            }
        },
        "en_us": {
            "bio": "Full-stack Developer",
            "projectsTitle": "Projects",
            "skillsTitle": "Skills",
            "socialsContactTitle": "Socials / Contact",
            "aboutTitle": "About",
            "about": "Hey! my name is Diego, I started studying programming in 2020, I'm a full-stack developer, enthusiast in game development and hacking. My first contact with programming, I was 13 years old and it was modifying Tibia bot scripts. I am currently 18 years old and I live in the countryside of São Paulo - Brazil.",
            "carousel": {
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
            "background": "bg-gradient-to-b from-[#33005a] to-[#550096]",
            "main_text": "text-amber-400",
            "navbar_text": "text-amber-400",
            "en_us_flag": "text-white",
            "about": "text-slate-200",
            "email_num": "text-slate-200",
            "carousel_title": "text-amber-400",
        },
        "light": {
            "background": "bg-slate-200",
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