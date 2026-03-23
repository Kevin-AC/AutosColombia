import RegistroPago from "../components/RegistroPago";
import MenuLateral  from "../components/MenuLateral";
import ListaHistorialPagos from "../components/ListaHistorialPagos";
export default function GestionPagos() {
    return (
        <main className="flex gap-0 bg-MainBackground">
            <article className="w-auto">
                <MenuLateral />
            </article>
            <section className="flex items-start justify-around gap-4 p-4">
                <RegistroPago />
                <ListaHistorialPagos/>
            </section>
        </main>
    )
}