import Menu from "./Menu";

const Categorys = ({ data }) => {
  return (
    <div>
      {data.map((categories, index) => {
        return (
          <div key={index}>
            <h2>{categories.name}</h2>
            <Menu data={categories.meals} />
          </div>
        );
      })}
    </div>
  );
};
export default Categorys;
