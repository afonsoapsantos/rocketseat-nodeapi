const express = require("express");
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//Rota Home
routes.get("/", (req, res) => {
    res.send("<h1 id='fisrt' style='color: #37C; font-family: arial; text-align: center;'>Hello World!!<br> Good Morning!!</h1>");
});

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);
routes.post("/products", ProductController.store);


module.exports = routes;