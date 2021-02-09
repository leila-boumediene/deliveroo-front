import { useState } from "react";

const Panier = ({ data }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter = 0));
  };
  //   const [eat, setEat] = useState();
  //   const [count, setCount] = useState();
  //   console.log(data);

  return (
    <>
      <div className="panier">
        <button type="button">Valider mon panier</button>
        <p>Votre panier est vide</p>
        <div
          className="add"
          onClick={() => {
            <button type="button">Ajouter au panier</button>;
          }}
        ></div>
        <div>
          <button className="delet" onCLick={handleClick}>
            Vider mon panier
          </button>
        </div>

        <div className="allButtons">
          <div className="quantity">
            <button
              className="downQuantity"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
            <p>{counter}</p>
            <button
              className="upQuantity"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Panier;
