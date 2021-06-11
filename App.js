import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Gallery from './Gallery'
import About from './About'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <section>
      <ul Id="Index">
     <Link exact to ="/"><li>Gallery</li></Link>
     <Link to ="/about"><li>About</li></Link>  
     </ul>
     <Switch>
     <Route exact path="/">
     <Gallery />
     </Route>
     <Route path="/about">     
     <About />
     </Route>
     </Switch>
     </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
