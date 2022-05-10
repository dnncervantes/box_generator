import React from 'react'
import {useState} from 'react';

const BoxGenerator = (props) => {

    const [boxColors, setBoxColors] = useState([]);
    const [input, setInput] = useState("");


    return(
        
        <div>
            
            {
                props.boxes.map((box, index) => {
                    return(
                        <div key={index} style={{backgroundColor: box.color, height: box.size, width: box.size}}>
                        </div>
                    )
                }
            )}
        </div>
    )
}
export default BoxGenerator