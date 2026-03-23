import { Link } from "react-router-dom"
export default function MenuLateral() {
    return (
        <section className="w-[350px] py-12 px-2 h-screen shadow-lg bg-Neutral flex flex-col justify-between">
                <div>
                <div className="flex gap-2">
                    <span className="w-12 h-12 bg-Primary/10 rounded-sm grid place-content-center"><ion-icon name="car-outline" size={'large'}></ion-icon></span>
                    <article>
                        <h1 className="text-3xl text-BlueHover font-medium">Autos Colombia</h1>
                        <p className="text-Paragraf font-medium">Parking Management</p>
                    </article>
                </div>

                <nav class="w-full mt-12">
                    <ul class="py-6 space-y-2 font-medium">
                        <li>
                            <Link to={'/'} className="NavLink">
                                <ion-icon name="home-outline" size={'large'}></ion-icon>
                                <span>Dashboard</span>
                            
                            </Link>
                            
                        </li>
                        <li>
                            <Link to={'/Usuarios'} className="NavLink">
                                <ion-icon name="people-outline" size={'large'}></ion-icon>
                                <span>Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Vehiculos'} className="NavLink">
                                <ion-icon name="car-outline" size={'large'}></ion-icon>
                                <span>Vehicles</span>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to={'/Celdas'} className="NavLink">
                                <ion-icon name="grid-outline" size={'large'}></ion-icon>
                                <span>Celldas</span>
                            </Link>

                        </li>
                        <li>
                            <Link to={'/Pagos'} className="NavLink">
                                <ion-icon name="cash-outline" size={'large'}></ion-icon>
                                <span>Payments</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Incidentes'} className="NavLink">
                                <ion-icon name="alert-circle-outline" size={'large'}></ion-icon>
                                <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
 
            <div className="flex items-center gap-2 text-Paragraf  hover:text-BlueHover px-6 group hover:scale-[1.02] hover:-translate-x-1 transition-all duration-300 ease-out overflow-hidden">
                    <ion-icon name="exit-outline" size={'large'}></ion-icon>
                    <p className="font-medium">Logout</p>
                </div>
           

        </section>
    )
}