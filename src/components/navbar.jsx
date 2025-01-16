import { useState, useEffect, useRef } from 'react';

const Navbar = ({ /*headerProp,*/ ...props }) => {
  const headerRef = useRef(null);
  const [visibleSection, setVisibleSection] = useState();

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = props.props.find(({ /*section,*/ ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection, props.props]); // Add 'props.props' to the dependency array

  return (
    <div className="nav-bar" ref={headerRef}>
      <nav className="nav-links">
        <button
          type="button"
          className={`navLink ${
            visibleSection === 'Landing' ? 'selected' : ''
          }`}
          onClick={() => {
            scrollTo(props.props[0].ref.current);
          }}
        >
          Home
        </button>
        <button
          type="button"
          className={`${visibleSection === 'About' ? 'selected' : ''}`}
          onClick={() => {
            scrollTo(props.props[1].ref.current);
          }}
        >
          About
        </button>{' '}
        <button
          type="button"
          className={`${visibleSection === 'Portfolio' ? 'selected' : ''}`}
          onClick={() => {
            scrollTo(props.props[2].ref.current);
          }}
        >
          Portfolio
        </button>{' '}
        <button
          type="button"
          className={`${visibleSection === 'Contact' ? 'selected' : ''}`}
          onClick={() => {
            scrollTo(props.props[3].ref.current);
          }}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
