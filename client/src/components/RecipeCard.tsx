export interface Props {
    recipe_name: string,
    recipe_description: string,
}

function RecipeCard(props: Props): JSX.Element {
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="http://placekitten.com/400/250" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.recipe_name}</h2>
            <p>{props.recipe_description}</p>
            <div className="card-actions justify-end">
            <button className="btn">Show Me</button>
            </div>
        </div>
    </div>
    )
}

export default RecipeCard