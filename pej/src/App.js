import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import Header from './Components/Header.js'
import Home from './Home.js'
import Contact from './Contact.js'
import Gif from './Gif.js'
import MotionDesign from './MotionDesign.js'
import Director from './Director.js'
import Adidas from './Page/adidas';
import Agaag from './Page/agaag';
import Alb from './Page/alb';
import Cil from './Page/cil';
import Cube from './Page/cube';
import Eleven1 from './Page/eleven1';
import Eleven2 from './Page/eleven2';
import Eleven3 from './Page/eleven3';
import Grieffjoy from './Page/grieffjoy';
import Hanoi from './Page/hanoi';
import Ilek from './Page/ilek';
import JuvenilesTour from './Page/juvenilestour';
import JuvenilesWay from './Page/juvenilesway';
import Ld from './Page/ld';
import Mineo from './Page/mineo';
import Pgreen from './Page/pgreen';
import Tiktok from './Page/tiktok';
import Underworld from './Page/underworld';

import "./App.css"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gif">
            <Gif />
          </Route>
          <Route path="/director">
            <Director />
          </Route>
          <Route path="/motiondesign">
            <MotionDesign />
          </Route>
          <Route path="/adidas">
            <Adidas />
          </Route>
          <Route path="/agirlandagun">
            <Agaag />
          </Route>
          <Route path="/alb">
            <Alb />
          </Route>
          <Route path="/cil">
            <Cil />
          </Route>
          <Route path="/thecube">
            <Cube />
          </Route>
          <Route path="/eleven1">
            <Eleven1 />
          </Route>
          <Route path="/eleven2">
            <Eleven2 />
          </Route>
          <Route path="/eleven3">
            <Eleven3 />
          </Route>
          <Route path="/griefjoy">
            <Grieffjoy />
          </Route>
          <Route path="/hanoi">
            <Hanoi />
          </Route>
          <Route path="/ilek">
            <Ilek />
          </Route>
          <Route path="/juvenilestour">
            <JuvenilesTour />
          </Route>
          <Route path="/juvenilesway">
            <JuvenilesWay />
          </Route>
          <Route path="/ld">
            <Ld />
          </Route>
          <Route path="/mineo">
            <Mineo />
          </Route>
          <Route path="/pgreen">
            <Pgreen />
          </Route>
          <Route path="/tiktok">
            <Tiktok />
          </Route>
          <Route path="/underworld">
            <Underworld />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
