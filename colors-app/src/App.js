import React from 'react';
import { Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';


function findPalette(id) {
  return seedColors.find(function (palette) {
    return palette.id === id
  });
}

function App() {


  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
    </Switch>
  );
}

export default App;
