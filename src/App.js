import React from "react"
import Header from "./components/header";
import Headline from "./components/headline"
import "./app.scss"

const tempArr = [{
  fname: 'Joe',
  lname: 'Biden',
  email: 'joe@gmail.com',
  age: 24,
  onlineStatus: true
}]


function App() {
  return (
    <div className="App">
        <Header/>
        <section className="main">
          <Headline header="Posts" dsc="Click the button to render" tempArr={tempArr} />
        </section>
    </div>
  );
}

export default App;
