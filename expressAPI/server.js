const express = require('express');
const pool = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
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
    res.send(products.rows);
});

app.post('/user/auth', async (req, res) => {
    console.log(req.body);
    const { password, email } = req.body;
    console.log(email);
    const user = (await pool.query('SELECT * FROM users WHERE user_email = $1', [email]));
    const [{ user_password }] = user.rows;
    console.log(user_password);
    console.log('hello');
    const isLoginValid = bcrypt.compare(password, user_password);
    await delay();
    if (isLoginValid) {
        return res.send(user.rows[0])
    }
    else {
        return res.status(401);
    }
});

app.post('/user', async (req, res) => {
    console.log(req.body);
    const { password, email, name } = req.body;
    const id = uuidv4();
    const passwordDigest = await bcrypt.hash(password, 10);
    try {
        const user = await pool.query('INSERT INTO users (user_id, user_name, user_email, user_password) VALUES ($1,$2,$3,$4)',
            [id, name, email, passwordDigest]);
        await delay();
        res.json(user);
    } catch (error) {
        const { code } = error;
        switch (code) {
            case '23505':
                console.log('Email já cadastrado');
                return res.status(400).send({ message: 'Email já cadastrado' })
        }
        console.log('Erro inesperado');
        return res.status(400).send({ message: 'Erro inesperado' })
    }



});



app.listen(4000, () => console.log("running on port 4000"));

function delay() {
    return new Promise(resolve => setTimeout(resolve, 90));
}