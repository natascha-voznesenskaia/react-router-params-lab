import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export function ProductDetailsPage() {
  const params = useParams();
  const idFromUrl = params.id;

  const productId = Number(idFromUrl);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <section>
        <h2>Товар не найден</h2>
        <p>Проверьте id в адресной строке.</p>
        <Link to="/products">← Назад к списку</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Товар: {product.title}</h2>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", borderRadius: 10, margin: "10px 0" }}
      />

      <p>{product.description}</p>

      <p>
        <strong>Цена:</strong> ${product.price}
      </p>

      <Link to="/products">← Назад к списку</Link>
    </section>
  );
}
