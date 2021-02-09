const Menu = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div
              className="menu"
              onClick={() => {
                alert(item.id);
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
      </div>
    </>
  );
};
export default Menu;
