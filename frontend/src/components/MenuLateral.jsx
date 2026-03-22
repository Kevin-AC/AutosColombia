import { Link } from "react-router-dom"
export default function MenuLateral() {
    return (
        <section className="w-[350px] py-12 px-2 h-screen shadow-lg bg-Neutral flex flex-col justify-between">
                <div>
                <div className="flex gap-2">
                    <img className="w-12" src="src/assets/Logo.svg" alt="Logo" />
                    <article>
                        <h1 className="text-3xl text-BlueHover font-medium">Autos Colombia</h1>
                        <p className="text-Paragraf font-medium">Parking Management</p>
                    </article>
                </div>

                <nav class="w-full mt-12">
                    <ul class="py-6 space-y-2 font-medium">
                        <li>
                            <Link to={'/'} className="NavLink">
                                <img src="src/assets/Container.svg" alt="icon Dashboard" />
                                <span>Dashboard</span>
                            
                            </Link>
                            
                        </li>
                        <li>
                            <Link to={'/Usuarios'} className="NavLink">
                                <img src="src/assets/Users.svg" alt="user icon" />
                                <span>Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="NavLink">
                                <img src="src/assets/Vehicles.svg" alt="user icon" />
                                <span>Vehicles</span>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to={'/'} className="NavLink">
                                <img src="src/assets/Payments.svg" alt="user icon" />
                                <span>Payments</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="NavLink">
                                <img src="src/assets/Reports.svg" alt="user icon" />
                                <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
 
            <div className="flex gap-2 px-6 group hover:scale-[1.02] hover:-translate-x-1 transition-all duration-300 ease-out overflow-hidden">
                        <img src="src/assets/Logout.svg" alt="logout icons" />
                        <p className="text-Paragraf font-medium hover:text-BlueHover">Logout</p>
                </div>
           

        </section>
    )
}