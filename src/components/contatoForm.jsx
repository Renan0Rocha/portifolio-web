import "../styles/components/contatoForm.css";

const ContatoForm = () => {
  const redes = [
    {
      nome: "LinkedIn",
      imagem: "/linkedin-logo.png",
      link: "https://www.linkedin.com/in/renan-rocha919/",
      descricao: "Conecte-se comigo no LinkedIn",
    },
    {
      nome: "GitHub",
      imagem: "/github-logo.png",
      link: "https://github.com/Renan0Rocha",
      descricao: "Veja meus projetos no GitHub: Renan0Rocha",
    },
    {
      nome: "Instagram",
      imagem: "/instagram-logo.png",
      link: "https://www.instagram.com/renan_rocha_s",
      descricao: "Me siga no Instagram @renan_rocha_s",
    },
    {
      nome: "E-mail",
      imagem: "/gmail-logo.png",
      link: "mailto:renanro919@gmail.com",
      descricao: "Entre em contato por e-mail: renanro919@gmail.com",
    },
  ];

  return (
    <div className="container">
      <h2>Minhas Redes de Contato</h2>
      <div className="redes-container">
        {redes.map((rede, index) => (
          <a key={index} href={rede.link} target="_blank" rel="noopener noreferrer" className="rede-item">
            <img src={rede.imagem} alt={rede.nome} className="rede-logo" />
            <div className="rede-info">
              <h3>{rede.nome}</h3>
              <p>{rede.descricao}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContatoForm;
