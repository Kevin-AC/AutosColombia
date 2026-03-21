
import CellsTable from "./components/CellsTable"
import MainCard from "./components/MainCard"
import MenuLateral from "./components/MenuLateral"
import VehiclesTable from "./components/VehicleTable"

function App() {
 

  return (
    <main className="flex gap-0 bg-MainBackground">
      <article className="w-auto">
        <MenuLateral />
      </article>
      <section className="w-full">
        <header className="w-full flex justify-end px-10 bg-white h-20">
          <img className="w-9" src="src/assets/User.svg" alt="user icon" />
        </header>
        <div className="flex flex-col items-center p-10 space-y-12 ">
          <section>
            <div className="flex gap-10 ">
              <MainCard
                title={'Celdas disponibles'}
                number={'42'}
                spam={'de 60 total'}
              />
              <MainCard
                title={'Vehiculos Activos'}
                number={'18'}
                spam={'En terminal'}
              />
              <MainCard
                title={'Ocupacion '}
                number={'30%'}
                spam={'Capacidad actual'}
              />
              <MainCard
                title={'Celdas disponibles'}
                number={'42'}
                spam={'de 60 total'}
              />
            </div>
          </section>
          <div className="flex gap-22">
            <CellsTable/>
            <VehiclesTable/>
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default App
