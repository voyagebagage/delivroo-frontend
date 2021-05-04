const Item = ({ tab }) => {
  return (
    <div className="y">
      {tab.map((meal) => {
        console.log("meal ===>", meal);

        return (
          <div key={meal.id}>
            <h3>{meal.title}</h3>
            <p>{meal.description}</p>
            <div>
              <span>{meal.price}</span>
              <img style={{ height: 200 }} src={meal.picture} alt="item" />
              {meal.popular && <span>POP</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
