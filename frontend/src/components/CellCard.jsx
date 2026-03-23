export default function CellCard({title,estado}){
    return(
        <article className="w-16 h-16 bg-white rounded-2xl flex   flex-col justify-center items-center group hover:text-BlueHover  hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out">
            <p className="uppercase font-bold">{title}</p>
            <div className={`w-8 h-8 rounded-xl grid place-content-center ${estado === 'ocupado' ? 'bg-Reddot/15' : 'bg-BlueHover/15'}`}>
                <span className={`${estado === 'ocupado' ? 'text-Reddot' : 'text-BlueHover'}`}><ion-icon name="ellipse"></ion-icon></span>
                
            </div>
        </article>
    )
}