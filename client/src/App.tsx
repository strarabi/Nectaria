import RecipeCard from './components/RecipeCard';
import Slider from './components/Slider';
import OptionsButton from './components/OptionsButton'

function App() {
  return (
    <div className='app-container'>
      <OptionsButton/>
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