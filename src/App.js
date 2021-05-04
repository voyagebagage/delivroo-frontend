import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Item from "./component/Item/Item";
import Header from "./component/Header/Header";
// import Restaurant from "../Restaurant/Restaurant";

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
      <div className="L">
        <Header data={data} />

        <div className="k">
          <div className="M">
            <div className="z">
              {data.categories.map((tab, index) => {
                return (
                  <>
                    {index < 6 && (
                      <div>
                        <h2>{tab.name}</h2>

                        <div className="y">
                          {tab.meals.map((meal, index) => {
                            return (
                              <>
                                {index && (
                                  <Item
                                    title={meal.title}
                                    description={meal.description}
                                    price={meal.price}
                                    popular={meal.popular}
                                  />
                                )}
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
      </div>
    </>
  );
}

export default App;
