import RecipeCard, { Recipe } from './components/RecipeCard';
import Navbar from './components/Navbar';
import React, { useState } from 'react'

function App() {
  const [recipeCards, setRecipeCards] = useState<JSX.Element[]>([]);
  for (let i = 0; i < 8 ; ++i) {
    const r: Recipe = {
      recipe_name: "Rice and Beans", 
      recipe_description: "Healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.",
      recipe_body: "recipe body goes here",
      cost_per_serving: "$1",
      time_to_prepare: "5",
      perishability_of_ingredients: "0",
      num_dishes_required: "1",
      difficulty: "0.1",
      recipe_image: "http://placekitten.com/400/250"
      }

    recipeCards.push(<RecipeCard recipe={r} />)
  }
  return (
    <div className='app-container'>
      <Navbar/>
      <div className="gap-10 pt-10 flex flex-wrap justify-center">
        {recipeCards}
      </div>
    </div>
  );
}

export default App;