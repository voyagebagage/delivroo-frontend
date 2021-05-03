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
            {data.categories.map((category, index) => {
              return (
                <>
                  {index < 6 && (
                    <div>
                      <h2>{category.name}</h2>
                      <h3>{category.meals}</h3>
                      {/* // <span>key={index}</span> */}
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
