import { useState } from "react";
import Panier from "./Panier";

const Menu = ({ data }) => {
  // création d'un state pour stocker un tableau de repas
  const [food, setFood] = useState();
  // const [item, setItem] = useState();

  // création d'une fonction qui se déclanche lorsque l'on clique sur un plat
  const handleClick = (item) => {
    setFood(item.target.value);
  };
  // création d'une copie du tableau pour ajouter les nouveaux plats
  let foodCopy = [...food];

  // pour ajouter un nouveau plat, il faut le pusher dans la copie de tableau
  foodCopy.push({ item });
  return (
    <>
      <div className="main">
        <div>
          {data.map((item, index) => {
            return (
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
                <img src={item.picture} alt={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Menu;
