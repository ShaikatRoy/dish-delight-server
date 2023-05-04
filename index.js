const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./Data/chefs.json');
const recipes = require('./Data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChefs = chefs.find(n=> n.id == id);
    res.send(selectedChefs);
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.filter(n => n.id == id);
    res.send(selectedRecipes);
    console.log(selectedRecipes)
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
});

app.listen(port, () => {
    console.log(`Dish Delight API is running on port: ${port}`)
})