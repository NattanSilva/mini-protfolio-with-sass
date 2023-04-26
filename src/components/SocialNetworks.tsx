import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nattansilva/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/NattanSilva",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/nattan_silva_/",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
