import './App.css';
import NavHeader from './layouts/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavHeader />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/addUser" component={AddUser} />
          <Route exact path="/editUser/:id" component={EditUser} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

      </div>
    </Router>


  );
}

export default App;
