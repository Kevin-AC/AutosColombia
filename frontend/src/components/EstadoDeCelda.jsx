export default function EstadoDeCelda() {
    return (
        <section className="w-[320px] h-[432px] bg-white rounded-xl shadow-lg border border-Neutral p-6 flex flex-col gap-5">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-Reddot/10 text-Reddot tracking-wider">
                        OCCUPIED
                    </span>
                    <h2 className="text-2xl font-bold text-TitlePrimary mt-2">
                        Cell A2
                    </h2>
                </div>

                <div className="w-10 h-10 flex items-center text-BlueHover justify-center rounded-lg bg-Neutral">
                    <ion-icon name="alert-circle-outline"></ion-icon>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between border-b border-Neutral pb-2">
                    <span className="text-sm font-bold text-Tertiary tracking-wider">
                        LICENSE PLATE
                    </span>
                    <span className="text-Primary text-xl font-semibold">
                        ABC-1234
                    </span>
                </div>

                <div className="flex justify-between border-b border-Neutral pb-2">
                    <span className="text-sm font-bold text-Tertiary tracking-wider">
                        VEHICLE TYPE
                    </span>
                    <span className="text-TitlePrimary font-medium">
                        SUV (Audi Q5)
                    </span>
                </div>

                <div className="flex justify-between border-b border-Neutral pb-2">
                    <span className="text-sm font-bold text-Tertiary tracking-wider">
                        ENTRY TIME
                    </span>
                    <span className="text-TitlePrimary font-medium">
                        10:45 AM
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-sm font-bold text-Tertiary tracking-wider">
                        DURATION
                    </span>
                    <span className="text-TitlePrimary font-medium">
                        2h 15m
                    </span>
                </div>

            </div>
            <div className="flex items-center justify-between mt-2">
                <button className="flex-1 bg-Primary hover:bg-BlueHover text-white py-3 rounded-lg font-semibold transition">
                    Register Exit
                </button>

                {/* <button className="ml-3 px-3 py-2 bg-Neutral rounded-lg hover:bg-gray-200 transition">
                    <ion-icon name="ellipsis-horizontal" className="text-Secondary"></ion-icon>
                </button> */}
            </div>

        </section>
    );
}