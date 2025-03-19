import socketLogo from '../assets/images/socketio_transparent.webp';
import reduxLogo from '../assets/images/redux.webp';
import Skills from './skills';

function About() {
  const skillsArr = [
    {
      name: 'JavaScript',
      imageUrl:
        'https://icongr.am/devicon/javascript-original.svg?size=75&color=000000',
    },
    {
      name: 'React',
      imageUrl:
        'https://icongr.am/devicon/react-original.svg?size=75&color=000000',
    },
    {
      name: 'Express',
      imageUrl:
        'https://icongr.am/devicon/express-original-wordmark.svg?size=75&color=000000',
    },
    {
      name: 'Node.js',
      imageUrl:
        'https://icongr.am/devicon/nodejs-original.svg?size=75&color=000000',
    },
    {
      name: 'PostgreSQL',
      imageUrl:
        'https://icongr.am/devicon/postgresql-original.svg?size=75&color=000000',
    },
    {
      name: 'Sequelize',
      imageUrl:
        'https://icongr.am/devicon/sequelize-original.svg?size=75&color=000000',
    },
    {
      name: 'Git',
      imageUrl:
        'https://icongr.am/devicon/git-original.svg?size=75&color=000000',
    },
    {
      name: 'Heroku',
      imageUrl:
        'https://icongr.am/devicon/heroku-original.svg?size=75&color=000000',
    },
    {
      name: 'HTML5',
      imageUrl:
        'https://icongr.am/devicon/html5-original.svg?size=75&color=000000',
    },
    {
      name: 'CSS3',
      imageUrl:
        'https://icongr.am/devicon/css3-original.svg?size=75&color=000000',
    },
    { name: 'Socket.IO', imageUrl: socketLogo },
    { name: 'Redux', imageUrl: reduxLogo },
    {
      name: 'GitHub',
      imageUrl:
        'https://icongr.am/devicon/github-original.svg?size=75&color=currentColor',
    },
    {
      name: 'Bootstrap',
      imageUrl:
        'https://icongr.am/devicon/bootstrap-plain.svg?size=75&color=currentColor',
    },
  ];

  return (
    <div className="contentContainer">
      <div className="headerContainer">
        <h2 className="header"> About </h2>
      </div>
      <div>
        <p className="contentBody">
        I work with JavaScript, CSS, React, Express, and PostgreSQL, among other tools. You can check out the technologies I use most often below. I enjoy solving complex problems with simple solutions and creating smooth, polished front-end experiences.
I focus on both the creative and technical sides of web development, building visually appealing, intuitive, and high-performance websites and apps. I&apos;m always looking to improve, learn, and write better code. When I&apos;m not coding, I like playing video games, staying active, and reading
        </p>
      </div>
      <div>
        <h3 className="about_h3">Check out the technologies I work with:</h3>
        <div className="skillsContainer">
          <div className="imageGrid">
            {skillsArr.map((skill, index) => (
              <Skills key={index} name={skill.name} imageUrl={skill.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
