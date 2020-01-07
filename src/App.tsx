import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import PersonForm from './routes/person-form';
import PersonList from './routes/person-list';
import UIElements from './routes/ui-elements';
import Navbar from './components/navbar/Navbar';

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
