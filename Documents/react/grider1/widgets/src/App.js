import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

function App() {
  return (
    <div >
       {/*<Accordion items={items}/>*/}
       <Search/>
    </div>
  );
}

export default App;
