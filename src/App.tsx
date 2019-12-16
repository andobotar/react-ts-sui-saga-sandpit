import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss';
import PersonForm from './roots/PersonForm/PersonForm';
import PersonList from './roots/PersonList/PersonList';
import Navbar from './components/Navbar/Navbar';
import UIElements from './roots/UIElements/UIElements';

const App: React.FC = () => {
    return (
        <div className="App magenta">
            <Navbar />
            <Switch>
                <Route path="/form" component={PersonForm} />
                <Route path="/list" component={PersonList} />
                <Route path="/stuff" component={UIElements} />
            </Switch>
        </div>
    );
};

export default App;
