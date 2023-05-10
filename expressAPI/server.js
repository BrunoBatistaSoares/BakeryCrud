const express = require('express');
const pool = require('./database');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

app.get('/', async (req, res) => {
    await delay();
    res.send("home")
});

app.get('/products', async (req, res) => {
    const products = await pool.query(
        'SELECT * from categories, product_categories, products where products.product_id = product_categories.product_id and product_categories.categorie_id = categories.categorie_id;'
    )
    await delay();
    res.send(products.rows);
});

app.get('/products/:category', async (req, res) => {
    const { category } = req.params;
    const products = await pool.query(
        'SELECT * from categories, product_categories, products where products.product_id = product_categories.product_id and product_categories.categorie_id = categories.categorie_id and categories.categorie_name = $1;', [category]
    )
    await delay();
    console.log('products by ' + category);
    res.send(products.rows);
});

app.post('/user/auth', async (req, res) => {
    console.log(req.body);
    const { password, email } = req.body;
    console.log(password, email);
    await delay();
    const user = { password, email, id: 10 };
    res.send(user);
});

app.listen(4000, () => console.log("running on port 4000"));

function delay() {
    return new Promise(resolve => setTimeout(resolve, 90));
}