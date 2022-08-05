export function LinesText( {text} ) {
    return (
        <div className="flex items-center mb-20">
            <div className="flex-grow bg-lime-400 h-1"></div>
            <div className="flex-grow-0 mx-5 font-bold text-3xl lg:text-4xl">{ text }</div>
            <div className="flex-grow bg-lime-400 h-1"></div>
        </div>
    )
}