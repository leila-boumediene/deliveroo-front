import { useState } from "react";

const Menu = ({ data }) => {
  const [counter, setCounter] = useState(0);
  console.log(data);
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div
              className="menu"
              onClick={() => {
                item.title && setCounter(counter + 1);
                return (
                  <>
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                  </>
                );
              }}
              key={item.id}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
              <img src={item.picture} alt={item.title} />
            </div>
          );
        })}
      </div>

      <div className="panier">
        <button type="button">Valider mon panier</button>
        <p>Votre panier est vide</p>
        <div
          className="add"
          onClick={() => {
            <button type="button">Ajouter au panier</button>;
          }}
        ></div>
        <div
          className="delet"
          onClick={() => {
            <button type="button">Vider mon panier</button>;
          }}
        ></div>
      </div>
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
    </>
  );
};
export default Menu;
