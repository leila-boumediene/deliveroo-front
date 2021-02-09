const Entete = ({ data }) => {
  return (
    <div className="entete">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <img src={data.picture} alt="" />
    </div>
  );
};
export default Entete;
