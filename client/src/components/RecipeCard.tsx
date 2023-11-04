export interface Recipe {
    recipe_name: string,
    recipe_description: string,
    recipe_body: string,
    recipe_image: string,
    cost_per_serving: string,
    time_to_prepare: string, // seconds
    perishability_of_ingredients: string, // normalized between 0 and 1 (1 = all ingredients are non-perishable)
    num_dishes_required: string,
    difficulty: string // normalized between 0 and 1 (1 = maximum difficulty)
}


export interface Props {
    recipe: Recipe
}

function RecipeCard(props: Props): JSX.Element {
    const modalId = `recipe_info_${props.recipe.recipe_name.replace(/\s/g, '_')}`;
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={props.recipe.recipe_image} alt="Recipe Picture" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.recipe.recipe_name}</h2>
            <p>{props.recipe.recipe_description}</p>
            <div className="card-actions justify-end">
            <button className="btn" onClick={()=>(document.getElementById(modalId) as HTMLDialogElement).showModal()}>Show Me</button>

            <dialog id={modalId} className="modal"> 
                <div className="modal-box">
                    <h1 className="font-bold text-center text-xl">{props.recipe.recipe_name}</h1>
                    <h1 className="font-bold text-lg">Recipe Info</h1>
                    <p>Cost Per Serving: {props.recipe.cost_per_serving} </p>
                    <p>Time to Prepare: {props.recipe.time_to_prepare} </p>
                    <p>Perishability of Ingredients: {props.recipe.perishability_of_ingredients} </p>
                    <p>Number of Dishes Required: {props.recipe.num_dishes_required} </p>
                    <p>Meal Difficulty: {props.recipe.difficulty} </p>
                    <h1 className="font-bold text-lg">Recipe</h1>
                    <p>{props.recipe.recipe_body}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            </div>
        </div>
    </div>
    )
}

export default RecipeCard