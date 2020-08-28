// External Imports
import React from 'react';
import {Route, Switch} from 'react-router';

// My Imports
import Dashboard from "./screens/Dashboard";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default App;
