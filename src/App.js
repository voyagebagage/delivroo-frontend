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
          alt="resto-photo"
        />
      </div>
      <div className="k">
        <div className="M"></div>
      </div>
    </>
  );
}

export default App;
