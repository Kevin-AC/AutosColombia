import RegistroPago from "../components/RegistroPago";
import MenuLateral  from "../components/MenuLateral";
import HistorialPagos from "../components/HistorialPagos";
export default function GestionPagos() {
    return (
        <main className="flex gap-0 bg-MainBackground">
            <article className="w-auto">
                <MenuLateral />
            </article>
            <section className="w-full p-4 flex gap-12 justify-between  mt-4 ">
                <RegistroPago />
                <HistorialPagos/>
            </section>
        </main>
    )
}