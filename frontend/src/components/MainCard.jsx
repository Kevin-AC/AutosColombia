export default function MainCard({title,number,spam}){
    return(
        <section className="bg-white w-60 h-40 px-7 pt-5 pb-12 text-Paragraf rounded-2xl">
            <h2 className="font-medium text-2xl text-PrimaryInverted">{title}</h2>
            <div className="flex gap-2">
                <p className="text-4xl text-BlueHover">{number}</p>
                <span>{spam}</span>
            </div>
        </section>
    )
}