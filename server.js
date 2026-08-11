const express = require("express");

const app = express();

app.use(express.json());

const products = [
    {
        id: 1,
        name: "Rice",
        price: 70,
        category: "Grocery"
    },
    {
        id: 2,
        name: "Sugar",
        price: 45,
        category: "Grocery"
    },
    {
        id: 3,
        name: "Soap",
        price: 35,
        category: "Personal Care"
    }
];

app.get("/", (req, res) => {
    res.json({
        message: "Simple Retail Catalog API",
        status: "running"
    });
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});
    app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Retail Catalog App is healthy"
  });
});

app.post("/products", (req, res) => {
    const { name, price, category } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

const PORT = 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Retail Catalog API running on port ${PORT}`);
  });
}

module.exports = app;
