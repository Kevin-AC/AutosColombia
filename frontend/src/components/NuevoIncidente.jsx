import { useState } from "react";

export default function NuevoIncidente() {

    const [tipo, setTipo] = useState("");

    const tipos = [
        { id: "damage", label: "Damage", icon: "car-sport-outline" },
        { id: "blockage", label: "Blockage", icon: "ban-outline" },
        { id: "other", label: "Other", icon: "warning-outline" }
    ];

    return (
        <div className="w-[350px] h-[678px] bg-white rounded-xl shadow-lg border border-Neutral p-6 flex flex-col gap-5">
            <h2 className="text-lg font-bold text-TitlePrimary">
                Nuevo Incidente
            </h2>

            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-Tertiary tracking-wider uppercase">
                        numero placa
                    </label>
                    <div className="relative">
                        <select className="w-full appearance-none inputRegistro">
                            <option>Select Plate (Optional)</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-Tertiary">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-Tertiary tracking-wider uppercase">
                        tipo de Incidente
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {tipos.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setTipo(item.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition
                                ${tipo === item.id
                                        ? "bg-Primary/10 border-Primary text-Primary"
                                        : "bg-Neutral border-Neutral text-Secondary hover:bg-Neutral/70"
                                    }`}
                            >
                                <ion-icon name={item.icon}></ion-icon>
                                <span className="text-sm font-medium">
                                    {item.label}
                                </span>
                            </button>
                        ))}

                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-Tertiary tracking-wider uppercase">
                        dia/hora
                    </label>

                    <input
                        type="datetime-local"
                        className="inputRegistro"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-Tertiary tracking-wider uppercase">
                        descripcion
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Detailed report..."
                        className="w-full bg-Neutral border border-Neutral rounded-xl px-4 py-3 text-Secondary outline-none focus:ring-2 focus:ring-Primary resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="buttonSubmit "
                >
                    <ion-icon name="add-circle-outline"></ion-icon>
                    Regitrar Incidente
                </button>

            </form>

        </div>
    );
}