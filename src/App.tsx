import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import PersonForm from './routes/PersonForm/PersonForm';
import PersonList from './routes/PersonList/PersonList';
import UIElements from './routes/UIElements/UIElements';
import Navbar from './components/Navbar/Navbar';

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
