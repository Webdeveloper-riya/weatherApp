import React, { useEffect, useState } from "react";
// import temp from "./components/temp.css";
// import "./src/components/style.css";
import "./style1.css";
// import cloud from "./cloud.png";
import cloud from "./cloud.png";

const Temapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const time = new Date();

  useEffect(() => {
    const fetchApi = async () => {
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c9916378a42eea945c854b61450dbf89
      // `;
      // if you want data in deg cel use &units=metric
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c9916378a42eea945c854b61450dbf89`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();

      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="backgounimg1">
        {/* <h1>Weather App</h1> */}
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              value={search}
              className="inputFeild"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></input>
          </div>
          {/* ternory operator */}
          {!city ? (
            <p className="ErrorMessage">No Data Found</p>
          ) : (
            <div>
              <div className="info">
                <p style={{ fontWeight: "bold" }}>{time.toDateString()}</p>
                <h2 className="location">
                  <i className="fas fa-street-view"></i>
                  {search}
                </h2>
                <div>
                  <img
                    src={cloud}
                    alt="cloud"
                    style={{ height: "120px", marginTop: "-11%" }}
                  ></img>
                </div>

                <h1 className="temp">{city.temp}&deg;Cel</h1>
                <h3 className="tempmin_max">
                  Min:{city.temp_min}&deg;Cel&nbsp;|&nbsp;Max:{city.temp_max}
                  &deg;Cel
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Temapp;
