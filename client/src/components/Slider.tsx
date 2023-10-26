import React, { useState } from 'react';

export interface Props {
    slider_question: string,
    slider_options: Array<string>,
}

function Slider(props: Props): JSX.Element {
    const [value, setValue] = useState(50)
    return (
        <div>
            <div className='text-center text-l m-5 font-bold text-lg'>
                <p>{props.slider_question}</p>
            </div>
            <input type="range" min={0} max="100" className="range" onInput={
                function(event: React.ChangeEvent<HTMLInputElement>) {setValue(Number(event.target.value))}
                } />
            <div className='text-center text-l'>
                {(value >= 0 && value <= 20) && <p>{props.slider_options[0]}</p>}
                {(value > 20 && value <= 40) && <p>{props.slider_options[1]}</p>}
                {(value > 40 && value <= 60) && <p>{props.slider_options[2]}</p>}
                {(value > 60 && value <= 80) && <p>{props.slider_options[3]}</p>}
                {value > 80 && <p>{props.slider_options[4]}</p>}
            </div>
        </div>
    )
}

export default Slider