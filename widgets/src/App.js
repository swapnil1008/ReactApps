import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

const items = [
  {
    title: "What is React?",
    content:
      "React is javascript library and it supports jsx and data binding etc. ",
  },
  { title: "Why use React?", content: "it supports Jsx and Virtual DOM" },
  {
    title: "How do we use React?",
    content: "We use react by creating components",
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Shade of Blue", value: "blue" },
];

const App = () => {
  //const [showDropdown, setDropdown] = useState(true);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectChange={setSelected}
          options={options}
        ></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
