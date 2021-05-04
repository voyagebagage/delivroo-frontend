const Item = ({ title, description, price, popular }) => {
  {
    return (
      <>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <span>{price}</span>
          {popular && <span>POP</span>}
        </div>
        {/* <span>key={index}</span> */}
      </>
    );
  }
};

export default Item;
