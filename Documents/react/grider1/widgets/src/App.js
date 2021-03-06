import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {title: "What is React",
    content: 'React is a JavaScript framevork'
    },
    {title: "How do you React?",
        content: 'You use React by creating components'
    },
    {title: "Why uses React?",
        content: 'React is a favorite JS library'
    },
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
]

function App() {

    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div >
       {/*<Accordion items={items}/>*/}
       {/*<Search/>*/}
       <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        {showDropdown && (<Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}/>)}
    </div>
  );
}

export default App;
