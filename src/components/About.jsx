import { useLayout } from '../provider/layout';

export function About() {
    const { language, text, theme, themeColors } = useLayout();

    return (
        <div className={`h-[80vh] lg:h-[54vh] mx-auto w-4/5 font-bold ${themeColors[theme].about}`}>
            <p className="text-xl lg:text-2xl">{text[language].about}</p>
            <div className="mt-4 lg:text-lg w-full text-slate-200 text-right">
                <span className="bg-fuchsia-800 p-2 rounded-lg">#OpenToWork</span>
            </div>
        </div>
    )
}

