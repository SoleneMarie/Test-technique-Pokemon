import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OnePokemon = () => {
  const { name } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + name
        );
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    console.log(data);
    {
      /* => me renvoie une sorte dobjet vide? pas résolu... */
    }
    fetchData();
  }, []);

  return <></>;
};

export default OnePokemon;
