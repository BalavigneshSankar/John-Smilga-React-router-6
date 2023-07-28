import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const { name, image } = products.find((product) => product.id === productId);

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Go to Products</Link>
    </section>
  );
};

export default SingleProduct;
