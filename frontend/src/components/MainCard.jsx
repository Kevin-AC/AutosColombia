export default function MainCard({title,number,spam}){
    return(
        <section className="bg-white w-60 h-40 px-7  text-Paragraf rounded-2xl flex flex-col justify-evenly shadow-2xl ">
            <h2 className="font-medium text-2xl text-PrimaryInverted">{title}</h2>
            <div className="flex gap-2">
                <p className="text-4xl font-bold text-BlueHover">{number}</p>
                <span>{spam}</span>
            </div>
        </section>
    )
}