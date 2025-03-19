import PortfolioCard from './portfolio-card';

const cardData = [
  {
    title: 'DrawBit',
    description:
      'A realtime multiplayer progressive web application inspired by the game pictionary.',
    githubLink: 'https://github.com/Metallic-Bees/DrawBit',
    projectLink: 'https://drawbit.herokuapp.com/',
  },
  {
    title: 'BookShopper',
    description: 'A mock e-commerce website featuring books.',
    githubLink: 'https://github.com/Crafty-Cranberries/Book-Shopper',
    projectLink: 'https://book-shopper.herokuapp.com/',
  },
  {
    title: 'OS-RPS',
    description:
      'A simple Rock, Paper, Szicssors game with Old School RuneScape visuals.',
    githubLink: 'https://github.com/Oosh74/Data_Dashboardps:',
    projectLink: 'https://oosh74.github.io/os-rps/', 
  }, 
  {
    title: 'Calculator',
    description:
      'A simple calculator website.',
    githubLink: 'https://github.com/Oosh74/Calculator_OP',
    projectLink: 'https://oosh74.github.io/Calculator_OP/',
  },
  {
    title: 'Etch-a-Sketch',
    description:
      'A blocky canvas to draw on.',
    githubLink: 'https://github.com/Oosh74/etch-a-sketch',
    projectLink: 'https://oosh74.github.io/etch-a-sketch/',
  },
];

const Portfolio = () => {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section className="contentContainer">
      <div className="headerContainer">
        <h2 className="header"> Portfolio </h2>
      </div>
      <div className="cardContainer">
        {cardData.map((card, index) => (
          <PortfolioCard key={index} onClick={handleClick} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
