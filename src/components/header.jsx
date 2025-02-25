import { Link } from "react-router-dom";
import "../styles/components/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Meu Portfólio</h1>
      <nav>
  <Link to="/sobreMim">Sobre Mim</Link>
  <Link to="/experiencias">Experiências</Link>
  <Link to="/habilidades">Habilidades</Link>
  <Link to="/formacao">Formação</Link>
  <Link to="/contato">Contato</Link>
</nav>

    </header>
  );
};

export default Header;
