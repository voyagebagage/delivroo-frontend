const Restaurant = ({ name, description, url }) => {
  {
    return (
      <>
        <div className="h">
          <h2>{name}</h2>
          <p>{description}</p>
          <img src={url} />
        </div>
      </>
    );
  }
};

export default Restaurant;
