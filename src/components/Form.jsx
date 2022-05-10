import {useState} from 'react';


const Form = (props) => {

    const [input, setInput] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        console.log(input);
        const newBox = {color:input, size: 100};
        props.addBox(newBox);
        setInput("");
    }
    return (
        
        <form onSubmit={createBox}>
            <p>
                {JSON.stringify(input)}
            </p>
            Color <input onChange={(e) => setInput (e.target.value)} value={input}/>
            <button>Add</button>
        </form>
    )
}
export default Form