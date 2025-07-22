import { Conocimientos } from "./components/Conocimientos"
import { Experiencia } from "./components/Experiencia"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { Menu } from "./components/Menu"
import { Proyectos } from "./components/Proyectos"
import { Separador } from "./components/Separador"
import { SobreMi } from "./components/SobreMi"

export const App = () => {

  //developer
  // const jsonMenu = './src/data/menu.json'
  // const jsonData = './src/data/data.json'
  //production
  // const jsonMenu = './menu.json'
  // const jsonData = './data.json'
  // const jsonData = 'https://huexqzebekzvmuxefjmr.supabase.co'

  return (
    <>

      <Menu />
      <main id="home" className="container md:w-2/4 w-auto p-8 h-full dark:darkText">

        <Home />
        <Separador/>
        {/* <SobreMi jsonData={ jsonData } /> */}
        {/* <Separador /> */}
        <Conocimientos />
        <Separador />
        <Proyectos />
        <Separador />
        <Experiencia />
        <Footer />

      </main>

    </>
  )
}
