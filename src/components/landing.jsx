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
          I am passionate about crafting digital experiences that seamlessly
          blend aesthetics and functionality. With a keen eye for design and a
          strong foundation in full stack software engineering, I specialize in
          bridging the gap between development and design. Learn more about me
          below and thanks for stopping by!
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
