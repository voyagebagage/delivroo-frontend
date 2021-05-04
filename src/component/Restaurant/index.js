const Restaurant = ({ name, description, url }) => {
  return (
    <>
      <div className="h">
        <h2>{name}</h2>
        <p>{description}</p>
        <img style={{ height: 200 }} src={url} alt="resto" />
      </div>
    </>
  );
};

export default Restaurant;
