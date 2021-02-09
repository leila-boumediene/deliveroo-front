import { useState } from "react";

const Menu = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter = 0));
  };
  console.log(data);
  return (
    <>
      <div className="main">
        <div>
          {data.map((item, index) => {
            return (
              <div
                className="menu"
                onClick={() => {
                  item.title && setCounter(counter + 1);
                  console.log(item.title, item.price);

                  <p>{(item.title, item.price)}</p>;
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
        </div>
      </div>
    </>
  );
};
export default Menu;
