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
                    <div className="w-full mt-4 flex justify-center items-start gap-8 ">
                        <RegistroUsuario/>
                        <ListaUsuarios/>

                    </div>
            </section>
                  

        </main>
    )
}