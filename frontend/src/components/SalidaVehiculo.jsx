
export default function SalidaVehiculo() {
    const resumenCosto = {
        duration : '2h 15m',
        baseRate : '$5.000/hr',
        totalCost : '$11,250',
        className : ''
    }

    const handleChange = () => {
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
    };

    return (
      <article className="bg-white rounded-xl shadow-xl border border-Neutral p-6">
        <h1 className="text-2xl font-bold text-TitlePrimary mb-2">
          Salida de Vehículo
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-Secondary uppercase ">
              Search License Plate
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                name="licensePlate"
                value={""}
                onChange={handleChange}
                className="inputRegistro"
                placeholder="Enter plate..."
                required
              />
              <span className="w-12 py-3 bg-Primary/15 rounded-sm grid place-content-center ">
                <ion-icon name="search-outline" size={"large"}></ion-icon>
              </span>
            </div>
          </div>
                <div className=" bg-Neutral/70 rounded-sm  p-4 ">
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-Tertiary tracking-wide">
                                Duration:
                            </span>
                            <span className="text-xl font-bold text-TitlePrimary">
                                {resumenCosto.duration}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-Tertiary tracking-wide">
                                Base Rate:
                            </span>
                            <span className="text-xl font-bold text-Primary">
                                {resumenCosto.baseRate}
                            </span>
                        </div>
                        <div className="flex items-center pt-3 justify-between ">
                            <span className="text-lg font-semibold text-Tertiary tracking-wide uppercase">
                                Total Cost:
                            </span>
                            <span className="text-3xl font-black text-Primary">
                                {resumenCosto.totalCost}
                            </span>
                        </div>
                    </div>
                </div>
          <button
            type="submit"
            className="w-full text-TitlePrimary bg-none border border-TitlePrimary/40 py-3 px-8 rounded-sm font-bold text-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
          >
            <ion-icon name="print-outline" size={"large"}></ion-icon>
            Registrar Salida
          </button>
        </form>
      </article>
    );
}
