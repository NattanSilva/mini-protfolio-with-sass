import Avatar from "../img/perfil.png";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Uma foto minha" />
      <p className="title">Desenvolvedor Front End</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1v0oVgOzF3oa2-h4scBCMWANVMt2ijgKJ/view?usp=share_link"
        target="_blank"
        className="btn"
      >
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
