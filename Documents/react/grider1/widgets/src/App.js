import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Router";
import Header from "./components/Header";

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
      <div>
          <Header/>

          <Route path="/">
              <Accordion items={items}/>
          </Route>
          <Route path="/list">
              <Search/>
          </Route>
          <Route path="/dropdown">
              <Dropdown options={options} label={'Select a color'} selected={selected} onSelectedChange={setSelected}/>
          </Route>
          <Route path="/translate">
              <Translate/>
          </Route>
      </div>


  );
}

export default App;
