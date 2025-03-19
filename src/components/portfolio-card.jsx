import codeIcon from '../assets/images/code.svg'

const PortfolioCard = ({
  title,
  description,
  githubLink,
  projectLink,
  onClick,
}) => {
  return (
    <div className="card">
      <div className="cardProfile">
        <img src={codeIcon} alt={title} />
      </div>
      <div className="cardBanner"></div>
      <div className="cardTitle">
        <h3>{title}</h3>
      </div>
      <div className="cardContent">
        <p>{description}</p>
      </div>
      <div className="cardBtnCont">
        <button className="cardBtn" onClick={() => onClick(githubLink)}>
          GitHub
        </button>
        <button className="cardBtn" onClick={() => onClick(projectLink)}>
          Project
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
