const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const cors = require('cors');
app.use(cors());

app.get('/data', (req, res) => {
  const data = [];

  fs.createReadStream('dataset.csv')
    .pipe(csv())
    .on('data', (row) => {
      data.push({
        url: row.url,
        name: row.name,
        ingredients: row.ingredients,
        steps: row.steps,
        rating: row.rating,
        prep_time: row.prep_time,
        cook_time: row.cook_time,
        total_time: row.total_time,
        nb_servings: row.nb_servings,
        image: row.image,
      });
    })
    .on('end', () => {
      res.json(data);
    });
});

const port = 3000 || process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});