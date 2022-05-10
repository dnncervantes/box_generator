import BoxGenerator from './components/BoxGenerator';
import Form from './components/Form';
import {useState} from 'react';


function App() {

  const [boxColors, setBoxColors] = useState([
    {color:"red", size: 100}, {color:"blue", size: 100}, {color:"purple", size: 100}
  ]);
  
  const addBox = (newBox) => {
    
    console.log(newBox);
    // make a copy of of the objects
    const copyBox = [...boxColors]
    // console.log(copyBox);
    copyBox.push(newBox);
    setBoxColors(copyBox);
  }


  return (
    <div className="App">
      {JSON.stringify(boxColors)}
      <hr />
      <Form addBox = {addBox}/>
      <BoxGenerator boxes = {boxColors}/>
    </div>
  );
}

export default App;
