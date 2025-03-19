function Landing(props) {
  const scrollTo = () => {
    props.portfolioProp.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="welcomeContainer">
      <div className="welcomeContent">
        <h1 className="welcomeText">
          Hi there! I&apos;m <span className="inlineColor"> Jared Usher</span>.
        </h1>
        <p className="subHeader">
        I love creating digital experiences that look great and work smoothly. With a background in full-stack development and an eye for design, I focus on making development and design work together seamlessly. Learn more about me below—thanks for visiting!
        </p>
        <button
          className="welcomeButton"
          id="buttonAnim"
          onClick={() => scrollTo()}
        >
          <div id="colorAnim"></div>
          <div className="buttonText">See My Work</div>
          <img
            className="buttonArrow"
            src={
              'https://icongr.am/octicons/arrow-down.svg?size=25&color=ffffff'
            }
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default Landing;
