import { Link } from "react-router-dom";
import { products } from "../data/products";

export function ProductsPage() {
  return (
    <section>
      <h2>Список товаров</h2>

      <ul style={{ display: "grid", gap: 10, padding: 0, listStyle: "none" }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 12,
            }}
          >
            <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>
            <p style={{ margin: "0 0 8px" }}>{p.description}</p>
            <strong>Price: ${p.price}</strong>

            <div style={{ marginTop: 10 }}>
              <Link to={`/products/${p.id}`}>Открыть товар</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
