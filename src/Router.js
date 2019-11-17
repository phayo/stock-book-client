import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loading from './components/Loading/';
import { Provider } from 'react-redux';
import store from './store';


const Home = lazy(() => import('./views/Homepage/Home'));
const Dashboard = lazy(() => import('./views/Dashboard/Dashboard'));
const Login = lazy(() => import('./views/Login/Login'));
const Register = lazy(() => import('./views/Register/Register'));
const Profile = lazy(() => import('./views/Profile/Profile'));
const Services = lazy(() => import('./views/Services/Service'));
const Transaction = lazy(() => import('./views/Transaction/Transaction'));

// Remember to add Loading component as fallback on the suspense as prop
export default function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback="Loading...">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/transaction" component={Transaction}/>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}
