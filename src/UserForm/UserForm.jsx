import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [userInput, setUserInput] = useState("Arrabiata");
  const [data, setData] = useState([]);

  const handleSearch = (userInput) => {
    const config = {
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    };
    return axios(config);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    console.log(userInput);
    handleSearch(userInput).then((res) => {
      setData(res.data.meals);
      console.log(data);
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "white",
            border: "0.1px solid gray",
            borderRadius: "10px"
          }}
        >
          <select
            name="city"
            id="city"
            style={{
              padding: "10px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none"
            }}
          >
            <option value="Lucknow">📍Lucknow</option>
            <option value="Varanasi">📍Varansi</option>
            <option value="Siddharthnagar">📍Siddharthnagar</option>
            <option value="Basti">📍Basti</option>
            <option value="Delhi">📍Delhi</option>
          </select>
          <input
            type="text"
            onChange={handleChange}
            style={{
              padding: "20px",
              fontSize: "18px",
              width: "360px",
              border: "none",
              borderRadius: "10px"
            }}
            placeholder="| Search for cuisine or a dish"
          />
          <input
            type="submit"
            onClick={handleSubmit}
            value="🔍  SEARCH"
            style={{
              padding: "20px",
              fontSize: "18px",
              width: "150px",
              border: "none",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "86%",
          margin: "auto",
          gap: "1rem",
          marginTop: "50px"
        }}
      >
        {data.map((item) => {
          return (
            <div
              style={{
                width: "250px",
                border: "1px solid gray",
                borderRadius: "10px"
              }}
            >
              <div>
                <img
                  src={item.strMealThumb}
                  alt="img"
                  widht="300px"
                  height="250px"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h3>Meal ID: {item.idMeal}</h3>
              <h4>Meal Name: {item.strMeal}</h4>
              <h4>Meal Category: {item.strCategory}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default UserForm;
