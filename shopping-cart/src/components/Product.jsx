import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Product Details</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6" key={product.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{
                  height: "200px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6 text-truncate">
                  {product.title}
                </Card.Title>
                <Card.Text
                  className="text-muted small"
                  style={{ height: "50px", overflow: "hidden" }}
                >
                  {product.description}
                </Card.Text>
                <div className="mt-auto">
                  <h5 className="text-success mb-3">${product.price}</h5>
                  <Button variant="primary" className="w-100">
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
