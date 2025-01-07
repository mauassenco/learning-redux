import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} key={Math.random()} />
      ))}
    </Styles.Container>
  );
};

export default Products;
