import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { NavPort } from "./components/NavPort"


export const App = () => {
  
  return (
    <>
      <div className="portfolio contenedor">
        <section className="portfolio__nav">
          <NavPort />
        </section>
        <section className="portfolio__info infoPort">
          <About />
          <Experience />
        </section>
      </div>
    </>
  )
}
