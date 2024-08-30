import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokelist = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let name = "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        {isLoading ? (
          <p>
            La cuisson de vos pokemons est presque parfaite, veuillez
            patienter... 🍗
          </p>
        ) : (
          data.results.map((item, index) => {
            name = item.name;
            return (
              <Link to={"/pokemon/" + name} key={index}>
                <section className="onePokemon">
                  <p>{item.name}</p>
                  <div className="pokePic">
                    <img src={item.url} alt={item.name} />
                  </div>
                </section>
              </Link>
            );
          })
        )}
      </main>
    </>
  );
};
export default Pokelist;
