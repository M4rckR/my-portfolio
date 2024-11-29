import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export const NavPort = () => {
  return (
    <>
      <section className="portNav contenedor">
        <p className="portNav__name">Marcos Romero</p>
        <p className="portNav__role">Desarrollador Frontend</p>

        <p className="portNav__textBody">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam,
          voluptatibus molestias
        </p>

        <div className="portNav__redes">
          <a href="#">
            {" "}
            <FaGithub />{" "}
          </a>
          <a href="#">
            {" "}
            <IoLogoLinkedin />{" "}
          </a>
          <a href="#">
            {" "}
            <FaInstagram />{" "}
          </a>
        </div>
      </section>

      <section className="contenedor portAnc">
            <a href="#">Sobre mi</a>
            <a href="#">Experiencia</a>
            <a href="#">Proyectos</a>
      </section>
    </>
  );
};
