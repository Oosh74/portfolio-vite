const Skills = ({ name, imageUrl }) => (
  <div className="imageContainer">
    <p>{name}</p>
    <img
      src={imageUrl}
      alt={name.toLowerCase()}
      loading="lazy"
      height="112px"
      width="112px"
    />
  </div>
);

export default Skills;
