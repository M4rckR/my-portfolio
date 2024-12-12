import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export const NavPort = () => {
  return (
    <>
      <div className="continerFixed">
      <section className="portNav">
        <img className="portNav__profile" src="/src/assets/img/mi_photo.jpg" alt="perfil" />
        <p className="portNav__name">Marcos Romero</p>
        <p className="portNav__role">Desarrollador Frontend</p>

        <p className="portNav__textBody">
          Apasionado por crear experiencias web atractivas y funcionales. Me encanta dar vida a las ideas a través del código.
        </p>

        <div className="portNav__redes">
          <a href="#about__info">
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
      </div>
    </>
  );
};
