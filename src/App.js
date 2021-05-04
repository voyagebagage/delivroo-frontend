import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://delivroo-backend.herokuapp.com/"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="h">
        <h2>{data.restaurant.name}</h2>
        <p>{data.restaurant.description}</p>
        <img
          src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
          alt="resto"
        />
      </div>
      <div className="k">
        <div className="M">
          <div>
            {data.categories.map((tab, index) => {
              return (
                <>
                  {index < 6 && (
                    <div>
                      <h2>{tab.name}</h2>
                      <div>
                        {tab.meals.map((meal, index) => {
                          return (
                            <>
                              <h3>{meal.title}</h3>
                              <p>{meal.description}</p>
                              <div>
                                <span>{meal.price}</span>
                                {meal.popular && <span>POP</span>}
                              </div>
                              {/* <span>key={index}</span> */}
                            </>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
