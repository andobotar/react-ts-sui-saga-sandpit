import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss';
import PersonForm from './roots/PersonForm/PersonForm';
import PersonList from './roots/PersonList/PersonList';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
    return (
        <div className="App magenta">
            <Navbar />
            <Switch>
                <Route path="/form" component={PersonForm} />
                <Route path="/list" component={PersonList} />
            </Switch>
        </div>
    );
};

export default App;
