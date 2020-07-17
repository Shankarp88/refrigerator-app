import React from 'react';
import './App.css';
// import Login from './components/login';
// import Fridge from './components/Fridge';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageIntroWithFixedNavbar from './components/FullPageIntroWithFixedNavbar';
import Dashboard from './components/Dashboard';
import NavbarFixed from './components/NavbarFixed';
import MyFoodItem from './components/MyFoodItem';
import SearchForm from './components/SearchForm';
import GroceryItem from './components/GroceryItem';
import GroceryItemInfo from './components/GroceryItemInfo';
import GroceryItemResults from './components/GroceryItemResults';

function App() {
  return (
    <div className="App">
      {/* <Fridge />
      <Login /> */}
      <BrowserRouter>
        <NavbarFixed/>
        <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route 
          path="/SearchForm"
          component={SearchForm} />
        <MyFoodItem/>
        <GroceryItem/>
        <GroceryItemInfo/>
        <GroceryItemResults/>
      </BrowserRouter>
    </div>
  );
}

export default App;
