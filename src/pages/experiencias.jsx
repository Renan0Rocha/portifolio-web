import ProjectCard from "../components/projectCard";
import "../styles/pages/experiencias.css";

const Experiencias = () => {
  return (
    <div className="container">
      <h2>Experiências</h2>
      <ProjectCard
        title="Projeto PROINFE"
        description="Um dos projetos em que atuei foi o Projeto de Informatização Escolar, desenvolvido em parceria com o Instituto Federal de Rondônia e o Senador Confúcio Moura. A proposta consiste na criação, implantação e manutenção de um sistema de informatização escolar para gerenciamento acadêmico e interface de usuários das Escolas Municipais de Educação Básica de Rondônia."
        image="/PROINFE.jpg"
        link="https://portal.ifro.edu.br/ji-parana/noticias/12175-ifro-lanca-projeto-de-informatizacao-escolar-em-parceria-com-senador-confucio-moura"
      />

      <ProjectCard
        title="Suporte Técnico - Tecnobyte Informática"
        description="Atuo como suporte técnico na Tecnobyte Informática, empresa brasileira especializada no desenvolvimento de software para automação e gestão comercial. Fundada em 1996, a empresa possui clientes em todo o território nacional e exterior, oferecendo soluções inovadoras para o setor empresarial."
        image="/tecnobyte-logo.png"
        link="https://www.linkedin.com/company/tecnobyte-informatica/"
      />
    </div>
  );
};

export default Experiencias;