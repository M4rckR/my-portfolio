import {
  FaJs,
  FaBootstrap,
  FaSass,
  FaReact,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

export const About = () => {
  return (
    <div id="about__info" className="about">
      <p className="about__infoHidden">
        {" "}
        <strong>Sobre mi</strong>{" "}
      </p>
      <p>
        Frontend Developer con 2 años de experiencia en desarrollo web y
        optimización de interfaces digitales en el{" "}
        <strong>sector financiero</strong> y tecnológico. Con formación en{" "}
        <strong>Ingeniería de Sistemas</strong>, destaco en la maquetación de
        interfaces bancarias, implementación de sistemas de{" "}
        <strong>alto impacto y mejora continua</strong> de la experiencia de
        usuario.{" "}
      </p>

      <p>
        He participado en proyectos internacionales, contribuyendo al diseño e
        implementación de soluciones digitales innovadoras y escalables.Tambien
        tuve la oportunidad de poder ser voluntario en una ONG donde pude
        aportar mis conocimientos y habilidades para ayudar comunidades en el
        Peru
      </p>

      <div className="habilidades">
        <h3>Habilidades</h3>
        <div className="habilidades__items">
          <p>
            <FaJs />
            <span>Javascript</span>
          </p>
          <p>
            <FaReact />
            <span>React</span>
          </p>
          <p>
            <RiTailwindCssFill />
            <span>Tailwind</span>
          </p>
          <p>
            <FaBootstrap />
            <span>Bootstrap</span>
          </p>
          <p>
            <FaSass />
            <span>Sass</span>
          </p>

          <p>
            <IoLogoFigma />
            <span>Figma</span>
          </p>
          <p>
            <FaGithub />
            <span>Github</span>
          </p>
          <p>
            <FaHtml5 />
            <span>HTML5</span>
          </p>
        </div>
      </div>

    
    </div>
  );
};
