import React from "react";

import 'react-uikit-ward/dist/index.css';

// PAGE
import IntroPage from "./pages/IntroPage/IntroPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendationPage from './pages/RecommendationPage/RecommendationPage';
import AlgorithmPage from './pages/AlgorithmPage/AlgorithmPage';
import EvaluationPage from './pages/EvaluationPage/EvaluationPage';


// Template
import HolyGrailTemplate from "./components/templates/HolyGrail/HolyGrail";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import "./App.scss";

// interface MatchParams {
//   mode: string;
// }

// interface MatchProps extends RouteComponentProps<MatchParams> {
// }

const App = () => {
  return (
    <div className="App">
      <Router>
        <HolyGrailTemplate>
          <Switch>
            <Route path="/" exact component={IntroPage}></Route>
            <Route path="/recommendation" exact component={RecommendationPage}></Route>
            <Route path="/algorithm" exact component={AlgorithmPage}></Route>
            <Route path="/evaluation" exact component={EvaluationPage}></Route>
            <Route path="/account/:mode" exact component={LoginPage}></Route>
          </Switch>
        </HolyGrailTemplate>
      </Router>
    </div>
  );
};

export default App;

