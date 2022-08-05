import { useEffect } from 'react';

import { useLayout } from './provider/layout';

import { LinesText } from './components/LinesText';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { SocialsContacts } from './components/SocialsContacts';
import { About } from './components/About';

import ProjectsSlide from './components/Carousel';

export function App() {
    const { language, setLanguage, theme, setTheme, text, themeColors } = useLayout();

    useEffect(() => {
        if (localStorage.getItem("language")) {
            setLanguage(() => localStorage.getItem("language"));
        }
        if (localStorage.getItem("theme")) {
            setTheme(() => localStorage.getItem("theme"));
        }
    }, []);

    return (
        <>
            <div className={`w-11/12 md:w-4/5 min-h-screen h-fit ${themeColors[theme].background} mx-auto ${themeColors[theme].main_text}`}>
                <Navbar />

                <Banner />
                
                <LinesText text={text[language].aboutTitle} />
                <About />
                
                <LinesText text={text[language].projectsTitle} />
                <ProjectsSlide />

                <LinesText text={text[language].skillsTitle} />
                <Skills />

                <LinesText text={text[language].socialsContactTitle} />
                <SocialsContacts />

                <Footer />
            </div>

        </>
    )
}
