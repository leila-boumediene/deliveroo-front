import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./Deliveroo_logo.svg.png";
import Entete from "./Entete";
import Categorys from "./Categorys";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backendlb.herokuapp.com/"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
      //   console.log(error.message);
      // }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <header>
        <img src={logo} alt=""></img>
      </header>
      <div>
        <Entete data={data.restaurant} />
        <Categorys data={data.categories} />
      </div>
    </>
  );
}

export default App;
