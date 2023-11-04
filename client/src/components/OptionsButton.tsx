import Slider from './Slider'

function RecipeCard(): JSX.Element {
    return (
        <div className="float-right m-2">
            <button className="btn btn-neutral" onClick={()=>(document.getElementById('options_menu') as HTMLDialogElement).showModal()}>Options</button>
            <dialog id="options_menu" className="modal">
                <div className="modal-box">
                    <Slider
                    slider_question="What's your budget?"
                    slider_options={["I'm on a very tight budget", "I'm looking for cost-effective options", "I prefer moderately priced items", "I can spend a bit more for quality", "I'm looking to splurge for a special occasion",]}
                    />
                    <Slider
                    slider_question="How much time do you want to spend on a meal?"
                    slider_options={['Minimal', 'A little', 'Moderate', 'A lot', 'A significant amount']}
                    />
                    <Slider
                    slider_question="How important is non-perishability of ingredients?"
                    slider_options={['Not important', 'Slightly important', 'Moderately important', 'Very important', 'Extremely important']}
                    />
                    <Slider
                    slider_question="How many dishes are you willing to wash?"
                    slider_options={['1', '1-2', '3-4', '5-6', 'As many as needed']}
                    />
                    <Slider
                    slider_question="How difficult a meal are you willing to prepare?"
                    slider_options={['Very easy', 'Easy', 'Moderate', 'Challenging', 'Very challenging']}
/>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default RecipeCard

