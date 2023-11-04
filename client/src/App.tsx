import RecipeCard, { Recipe } from './components/RecipeCard';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';

function App() {
  const [recipeCards, setRecipeCards] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(data => {
        const recipes: JSX.Element[] = data.map((item: any, index: number) => {
          const recipe: Recipe = {
            recipe_name: item['name'],
            recipe_description: "", // todo
            recipe_body: item['steps'],
            recipe_image: item['image'],
            cost_per_serving: "0",
            time_to_prepare: "0",
            perishability_of_ingredients: "0",
            num_dishes_required: "0",
            difficulty: "0",
          };

          return <RecipeCard key={index} recipe={recipe} />;
        });

        setRecipeCards(recipes);
      });
  }, []);

  return (
    <div className='app-container'>
      <Navbar />
      <div className="gap-10 pt-10 flex flex-wrap justify-center">
        {recipeCards}
      </div>
    </div>
  );
}

export default App;
