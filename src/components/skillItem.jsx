import "../styles/components/skillItem.css";

const SkillItem = ({ skill }) => {
  return (
    <li className="skill-item fade-in">
      <img src={skill.image} alt={skill.name} className="skill-logo" />
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
    </li>
  );
};

export default SkillItem;