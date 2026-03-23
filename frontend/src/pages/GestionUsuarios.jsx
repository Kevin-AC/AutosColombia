import Header from "../components/Header";
import ListaUsuarios from "../components/ListaUsuarios";
import MenuLateral from "../components/MenuLateral";
import RegistroUsuario from "../components/RegistroUsuario";

export default function GestionUsuarios(){
    return(
        <main className="flex gap-0 bg-MainBackground">
            <article className="w-auto">
                <MenuLateral />
            </article>
            <section className="w-full">
                <div className="flex items-start justify-around gap-4 p-4 ">
                        <RegistroUsuario/>
                        <ListaUsuarios/>

                    </div>
            </section>
                  

        </main>
    )
}