import mastLogo from '../assets/images/mastodon-logo-scaled.png';

function Contact() {
  const handleClick = (link) => {
    if (link) {
      window.open(link);
    } else {
      window.location = 'mailto:jaredusher.dev@gmail.com';
    }
  };

  return (
    <section className="contentContainer">
      <div className="headerContainer">
        <h2 className="header"> Contact </h2>
      </div>
      <p className="contentBody footerText">
        Feel free to reach out if you are interested in working together,
        {'\n'} have any questions, or just want to connect.
      </p>
      <div className="emailBtnCntr">
        <button className="contactBtn" onClick={() => handleClick()}>
          <div className="contactBtnText"> jaredusher.dev@gmail.com </div>
          <img
            src={
              'https://icongr.am/octicons/mail.svg?size=25&color=currentColor'
            }
            alt="email"
            height="25px"
            width="25px"
            loading="lazy"
          />
        </button>
      </div>
      <div className="socailsBtnCntr">
        <button
          data-tooltip="Mastodon"
          className="socialBtn"
          onClick={() => handleClick('https://mastodon.social/@jusher')}
        >
          <img
            src={mastLogo}
            alt="twitter"
            height="56px"
            width="56px"
            loading="lazy"
          />
        </button>
        <button
          className="socialBtn"
          onClick={() => handleClick('https://github.com/Oosh74')}
          data-tooltip="Github"
        >
          <img
            className="socialsImg"
            src={'https://icongr.am/feather/github.svg?size=128&color=ffffff'}
            alt="gitHub"
            height="56px"
            width="56px"
            loading="lazy"
          />
        </button>
        <button
          data-tooltip="LinkedIn"
          className="socialBtn"
          onClick={() => handleClick('https://www.linkedin.com/in/jaredusher/')}
        >
          <img
            src={
              'https://icongr.am/devicon/linkedin-original.svg?size=56&color=currentColor'
            }
            alt="linkedIn"
            height="56px"
            width="56px"
            loading="lazy"
          />
        </button>
      </div>
    </section>
  );
}

export default Contact;
