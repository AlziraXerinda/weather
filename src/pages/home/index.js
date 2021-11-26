import { Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Appbar from "../../components/appbar";
import City from "../../components/listCity";
import Search from "../../components/search";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  var cidades = [
    "Maputo",
    "Nairobi",
    "Luanda",
    "Cairo",
    "Dakar",
    "Lisboa",
    "Madrid",
    "Paris",
  ];

 

    useEffect(() => {
      var cit = [];
      for(const i of cidades){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=375b5b72defecfdfccfa090d50f49db4`)
        .then((response) => response.json())
        .then((jsonResponse) => {    
          console.log(jsonResponse)
          console.log('i')
          setLoading(false);
          cit.push(jsonResponse)
        }); 
      }
      setCities(cit) 
      //console.log(citiess) //tem todos dados bonitinho
     //console.log(cities)  //nadaaaaaaaaaaaa
    },
    
     []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=375b5b72defecfdfccfa090d50f49db4`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setCities(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <Appbar />
      <Search search={search} />
      <Typography className="App-intro" color="secondary">
        Encontre aqui os melhores filmes para si!
      </Typography>
      <div className="movies mt-5">
        {loading && !errorMessage ? (
          <span>
            {" "}
            <center>
              <Spinner className="spinner" animation="border" />{" "}
            </center>
          </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          cities.map((movie) => (
            <City key={movie.id}  movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;

/* <Link
              to={"/details/" + movie.imdbID}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <cities key={`${index}-${movie.Title}`} movie={movie} onc />
            </Link> */

/* import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Appbar from "../../components/appbar";
import City from "../../components/listCity";
import Search from "../../components/search";


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  var cidades = ['Maputo', 'Nairobi', 'Luanda', 'Cairo', 'Dakar', 'Lisboa', 'Madrid', 'Paris']

  useEffect(() => {
    var citiess = [];
    for(const i of cidades){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=375b5b72defecfdfccfa090d50f49db4`)
      .then((response) => response.json())
      .then((jsonResponse) => {    
        console.log(i)
        setLoading(false);
        citiess.push(jsonResponse)
      }); 
    }
    setCities([citiess]) 
    //console.log(citiess) //tem todos dados bonitinho
   console.log(cities)  //nadaaaaaaaaaaaa
  },
  
   []);

  //console.log(cities)





  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=375b5b72defecfdfccfa090d50f49db4`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setCities(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <Appbar />
      <Search search={search} />
      <Typography className="App-intro" color="secondary">
        Encontre aqui os melhores filmes para si!
      </Typography>
      <div className="cities mt-5">
        {loading && !errorMessage ? (
          <span>
            {" "}
            <center>
              <Spinner className="spinner" animation="border" />{" "}
            </center>
          </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
           cities?.map((movie, index) => ( 

          <City key={`${index}-${movie.name}`} movie={movie} />

           )) 
        )}
      </div>
    </div>
  );
};

export default HomePage;
 */
