import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Test Item",
    price: 4,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "My First Book",
    price: 5,
    description: "The first book I ever wrote",
  },
  {
    id: "p3",
    title: "My Second Book",
    price: 6,
    description: "The Second book I ever wrote",
  },
];
const Products = () => {
  const addNewProduct = () => {};
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
