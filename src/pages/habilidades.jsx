import "../styles/pages/habilidades.css";
import SkillItem from "../components/skillItem";

const basePath = import.meta.env.BASE_URL; // Obtém a base do Vite

const skills = [
  { name: "JavaScript", description: "Linguagem de programação essencial para o desenvolvimento web, utilizada no frontend e backend.", image: `${basePath}javascript-logo.png` },
  { name: "React.js", description: "Biblioteca JavaScript para construção de interfaces de usuário interativas e dinâmicas.", image: `${basePath}react-logo.png` },
  { name: "Next.js", description: "Framework React para desenvolvimento de aplicações otimizadas e escaláveis.", image: `${basePath}next-logo.png` },
  { name: "Node.js", description: "Runtime JavaScript para execução no servidor, permitindo construir APIs e aplicações backend.", image: `${basePath}node-logo.png` },
  { name: "Git", description: "Sistema de controle de versões amplamente utilizado para colaboração e versionamento de código.", image: `${basePath}git-logo.png` }
];

const Habilidades = () => {
  return (
    <div className="container">
      <h2>Minhas Habilidades</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
};
  
export default Habilidades;
