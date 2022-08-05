import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { GiBrazilFlag } from 'react-icons/gi';
import { FaFlagUsa } from 'react-icons/fa';
import { useLayout } from '../provider/layout';

export function Navbar() {
    const { language, setLanguage, theme, setTheme, themeColors } = useLayout();

    function handleEnUsLang() {
        localStorage.setItem("language","en_us");
        setLanguage(() => "en_us");
    }

    function handlePtBrLang() {
        localStorage.setItem("language","pt_br");
        setLanguage(() => "pt_br");
    }

    function handleWhiteTheme() {
        localStorage.setItem("theme","light");
        setTheme(() => "light");
    };

    function handleDarkTheme() {
        localStorage.setItem("theme","dark");
        setTheme(() => "dark");
    };

    return (
        <nav className={`font-bold text-lg lg:text-xl text-amber-400 font-xl px-5 py-2 flex justify-between`}>
            <span>odgiedev</span>
            <div className="flex items-center w-fit">
                {
                    theme === "dark"
                    ?
                    <button onClick={handleWhiteTheme}> <BsSunFill size={30} /> </button>
                    :
                    <button onClick={handleDarkTheme}> <BsMoonStarsFill /> </button>
                }
                
                <span className="mx-4 text-black">|</span>
                
                {
                    language === "pt_br"
                    ?
                    <button onClick={handleEnUsLang} className={`${themeColors[theme].en_us_flag} flex items-center justify-between`}> <FaFlagUsa size={30} color={themeColors[theme].en_us_flag} /> <span className="ml-3">en-us</span> </button>
                    :
                    <button onClick={handlePtBrLang} className="text-[#09b300] flex items-center"> <GiBrazilFlag size={40} color={"#09b300"} /> <span className="ml-2">pt-br</span> </button>
                }
            </div>
        </nav>
    )
}