export default function RegistroPago() {
    return (
        <section className="w-[550px] h-[462px] bg-white rounded-xl shadow-lg border border-Neutral p-6 flex flex-col gap-5">
            <div>
                <h2 className="title">
                    Nuevo Pago
                </h2>
                <p className="text-sm text-Paragraf mt-1">
                    Log monthly subscription or ad-hoc parking fees.
                </p>
            </div>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-Tertiary tracking-wider">
                        SELECT USER
                    </label>
                    <div className="relative">
                        <select className="inputRegistro appearance-none text-Secondary">
                            <option className="">Select user...</option>
                            <option>Kevin</option>
                            <option>Juan</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-Tertiary">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-Tertiary tracking-wider">
                        AMOUNT (COP)
                    </label>
                    <div className="flex items-center inputRegistro">
                        <span className="text-Tertiary mr-2">$</span>
                        <input
                            type="number"
                            placeholder="0.00"
                            className="w-full bg-transparent outline-none text-Secondary"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-Tertiary tracking-wider">
                        PAYMENT DATE
                    </label>
                    <input
                        type="date"
                        className="inputRegistro text-TitlePrimary"
                    />
                </div>
                <button
                    type="submit"
                    className="buttonSubmit"
                >
                    Confirm Transaction
                </button>

            </form>
        </section>
    );
}