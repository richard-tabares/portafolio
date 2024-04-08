import { Conocimientos } from "./components/Conocimientos"
import { Experiencia } from "./components/Experiencia"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { Menu } from "./components/Menu"
import { Poryectos } from "./components/Poryectos"
import { Separador } from "./components/Separador"
import { SobreMi } from "./components/SobreMi"

export const App = () => {
  return (
    <main id="home" className="container md:w-2/4 w-auto h-screen p-8 py-10 dark:darkText">
      
      <Menu />
      <Home />
      <Separador />
      <SobreMi />
      <Separador />
      <Conocimientos />
      <Separador />
      <Poryectos />
      <Separador />
      <Experiencia />
      <Footer />

    </main>
  )
}
