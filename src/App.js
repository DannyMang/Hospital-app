import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Patients from './components/Patients';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/appointments" component={Appointments} />
          <Route path="/patients" component={Patients} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;