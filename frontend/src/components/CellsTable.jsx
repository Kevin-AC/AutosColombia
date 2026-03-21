import CellCard from "./CellCard"
export default function CellsTable(){
     const cardsData = [
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        { title: 'A1' },
        
      ];
    return(
        <section className="w-[600px]">
            <h2 className="text-3xl font-medium text-PrimaryInverted">Estado de Celdas</h2>
            <div className="flex justify-between text-Paragraf pb-5">
                <p className="text-Paragraf text-lg">Monitoreo en tiempo real</p>
                <div className="flex w-fit gap-4 pr-3">
                    <div className="flex gap-2 items-center uppercase flex-row-reverse">
                        <p>Libre</p>
                        <span className="w-2 h-2 bg-BlueHover rounded-full"></span>
                    </div>
                    <div className="flex gap-2 items-center uppercase flex-row-reverse">
                        <p>Ocupado</p>
                        <span className="w-2 h-2 bg-Reddot rounded-full"></span>
                    </div>
                </div>
            </div>
            <div className="w-[600px] bg-Primary/10 rounded-2xl h-auto p-8 flex justify-center gap-2 flex-wrap">
                {cardsData.map((card, index) => (
                    <CellCard key={index} title={card.title} />
                ))}
            </div>
        </section>
    )
}