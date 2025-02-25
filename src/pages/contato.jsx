import "../styles/pages/contato.css";
import ContatoForm from "../components/contatoForm";

const Contato = () => {
  return (
    <div className="container">
      <h2>Contato</h2>
      <p>Entre em contato comigo através das minhas redes sociais:</p>
      <ContatoForm />
    </div>
  );
};

export default Contato;
