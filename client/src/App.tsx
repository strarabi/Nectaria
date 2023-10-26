import RecipeCard from './components/RecipeCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <div className="gap-10 pt-10 flex flex-wrap justify-center">
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
        <RecipeCard recipe_name='rice and beans' recipe_description='Affordable, healthy, efficient, and budget-friendly recipe that is enjoyed by college students worldwide.' />
      </div>
    </div>
  );
}

export default App;