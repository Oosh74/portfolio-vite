import bookShopper from '../assets/images/bookshoppericon.png';
import drawBit from '../assets/images/drawbiticon.png';
import dataDash from '../assets/images/datadashicon.png';
import PortfolioCard from './portfolio-card';

const cardData = [
  {
    imgSrc: bookShopper,
    title: 'BookShopper',
    description: 'A mock e-commerce website featuring books.',
    githubLink: 'https://github.com/Crafty-Cranberries/Book-Shopper',
    projectLink: 'https://book-shopper.herokuapp.com/',
  },
  {
    imgSrc: dataDash,
    title: 'Data Dash',
    description:
      'A data dashboard that allows users to retrieve and visualize a data set. Under Construction.',
    githubLink: 'https://github.com/Oosh74/Data_Dashboard',
    projectLink: 'https://visualdatadash.herokuapp.com/',
  },
  {
    imgSrc: drawBit,
    title: 'DrawBit',
    description:
      'A realtime multiplayer progressive web application inspired by the game pictionary.',
    githubLink: 'https://github.com/Metallic-Bees/DrawBit',
    projectLink: 'https://drawbit.herokuapp.com/',
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
