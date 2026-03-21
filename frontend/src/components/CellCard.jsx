export default function CellCard({title}){
    return(
        <article className="w-16 h-16 bg-white rounded-2xl flex  flex-col justify-center items-center group hover:scale-[1.02] hover:-translate-x-1 transition-all duration-300 ease-out">
            <p>{title}</p>
            <span className="w-2 h-2 bg-BlueHover rounded-full"></span>
        </article>
    )
}