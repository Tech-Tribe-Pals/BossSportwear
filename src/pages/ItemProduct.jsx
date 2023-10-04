import { useParams } from "react-router-dom";

const ItemProduct = () => {
  const { id } = useParams();

  return (
    <main>
      <h2>Nombre { id }</h2>
    </main>
  );
};

export default ItemProduct;
