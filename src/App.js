import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage.js" /*home-page*/));
const FilmInfoPage = lazy(() => import("./pages/FilmInfoPage.js"));
const CharacterPage = lazy(() => import("./pages/CharacterPage.js"));
const PlanetPage = lazy(() => import("./pages/PlanetPage"));
const SpeciesPage = lazy(() => import("./pages/SpeciesPage"));
const StarshipPage = lazy(() => import("./pages/StarshipPage"));
const VehiclePage = lazy(() => import("./pages/VehiclePage"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/films/:id" component={FilmInfoPage} />
          <Route path="/people/:id" component={CharacterPage} />
          <Route path="/planets/:id" component={PlanetPage} />
          <Route path="/species/:id" component={SpeciesPage} />
          <Route path="/starships/:id" component={StarshipPage} />
          <Route path="/vehicles/:id" component={VehiclePage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
